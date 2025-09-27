using QuizService.Aplication.DTOs.QuizDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Interfaces.Services
{
    public interface IQuizService
    {
        Task CreateQuizAsync(QuizDTO quizDTO, CancellationToken ct = default);
    }
}
