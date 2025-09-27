using QuizService.Aplication.DTOs.CategoryDTOs;
using QuizService.Aplication.Interfaces.Repositories;
using QuizService.Aplication.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<IEnumerable<CategoryDTO>> GetAllCategoriesAsync(CancellationToken ct = default)
        {
            var categories = await _categoryRepository.GetAllAsync(ct);

            return categories
                .Where(c => c.IsDeleted == false)
                .Select(c => new CategoryDTO
            {
                Id = c.Id,
                Name = c.Name
            }).ToList();
        }
    }
}
