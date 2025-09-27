using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizService.Aplication.DTOs;
using QuizService.Aplication.DTOs.CategoryDTOs;
using QuizService.Aplication.Interfaces.Repositories;
using QuizService.Aplication.Interfaces.Services;

namespace QuizService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ResponsePackage<IEnumerable<CategoryDTO>>> GetAllCategories(CancellationToken ct = default)
        {
            try
            {
                var categories = await _categoryService.GetAllCategoriesAsync(ct);
                return new ResponsePackage<IEnumerable<CategoryDTO>>(categories, true, "Success");
            }
            catch (Exception ex)
            {
                return new ResponsePackage<IEnumerable<CategoryDTO>>(false, ex.Message);
            }
        }


    }
}
