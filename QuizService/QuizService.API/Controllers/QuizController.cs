using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizService.Aplication.DTOs;
using QuizService.Aplication.DTOs.QuizDTOs;
using QuizService.Aplication.Interfaces.Services;

namespace QuizService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {

        private readonly IQuizService _quizService;

        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpPost]
        public async Task<ResponsePackage<string>> CreateQuizAsync([FromBody] QuizDTO quizDTO)
        {
            try
            {
                await _quizService.CreateQuizAsync(quizDTO);
                return new ResponsePackage<string>(true, "Quiz created successfully");
            }
            catch (Exception ex)
            {
                return new ResponsePackage<string>(false, $"Error creating quiz: {ex.Message}");
            }
        }
    }
}
