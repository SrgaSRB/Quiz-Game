using Microsoft.AspNetCore.Http;
using QuizService.Aplication.DTOs.QuizDTOs;
using QuizService.Aplication.Interfaces.Repositories;
using QuizService.Aplication.Interfaces.Services;
using QuizService.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.AccessControl;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Services
{
    public class QuizService : IQuizService
    {
        private readonly IQuizReposotory _quizRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ICategoryRepository _categoryRepository;

        public QuizService(IQuizReposotory quizRepository, IHttpContextAccessor httpContextAccessor, ICategoryRepository categoryRepository)
        {
            _quizRepository = quizRepository;
            _httpContextAccessor = httpContextAccessor;
            _categoryRepository = categoryRepository;
        }

        public async Task CreateQuizAsync(QuizDTO quizDTO, CancellationToken ct = default)
        {
            if (quizDTO == null)
                throw new ArgumentNullException(nameof(quizDTO));

            if (string.IsNullOrWhiteSpace(quizDTO.Title))
            {
                throw new ArgumentException("Quiz title cannot be empty");
            }

            var userId = _httpContextAccessor.HttpContext?.User?.FindFirst("id")?.Value;
            if (string.IsNullOrWhiteSpace(userId) || !Guid.TryParse(userId, out var userIdParsed))
                throw new UnauthorizedAccessException("Invalid or missing user id.");

            Category newCategory = null;

            if (string.IsNullOrEmpty(quizDTO.CategoryId))
            {
                newCategory = new Category
                {
                    Id = Guid.NewGuid(),
                    Name = quizDTO.NewCategoryName
                };
            }
            else
            {
                var categoryExists = await _categoryRepository.FirstOrDefaultAsync(c => c.Id.ToString() == quizDTO.CategoryId, ct);
                if (categoryExists == null)
                {
                    throw new ArgumentException("Specified category does not exist.");
                }
                newCategory = categoryExists;
            }

                Quiz newQuiz = new Quiz
                {
                    Id = Guid.NewGuid(),
                    Title = quizDTO.Title,
                    Description = quizDTO.Description,
                    TimeLimitMinutes = quizDTO.TimeLimitMinutes,
                    DifficultyLevel = quizDTO.DifficultyLevel,
                    CreatedByUserId = userIdParsed,
                    CategoryId = newCategory.Id,
                    Category = newCategory,
                    Questions = quizDTO.Questions.Select(q => new Question
                    {
                        Id = Guid.NewGuid(),
                        Text = q.Text,
                        Points = q.Points,
                        Type = q.Type,
                        Answers = q.Answers.Select(a => new Answer
                        {
                            Id = Guid.NewGuid(),
                            Text = a.Text,
                            IsCorrect = a.IsCorrect
                        }).ToList()
                    }).ToList()
                };

            await _quizRepository.AddAsync(newQuiz, ct);
            await _quizRepository.SaveChangesAsync(ct);
        }

    }
}
