using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpLogging;
using Microsoft.AspNetCore.Mvc;
using QuizService.Aplication.DTOs;
using QuizService.Aplication.DTOs.Auth;
using QuizService.Aplication.Interfaces.Services.Auth;
using QuizService.Aplication.Services;

namespace QuizService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<ResponsePackage<string>> Register([FromBody] RegisterDTO registerDto)
        {
            try
            {
                await _authService.RegisterUserAsync(registerDto);

                return new ResponsePackage<string>(true, "User registered successfully");
            }
            catch (Exception ex)
            {
                return new ResponsePackage<string>(false, ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<ResponsePackage<string>> Login([FromBody] LoginDTO loginDto)
        {
            try
            {
                var token = await _authService.LoginAsync(loginDto);
                return new ResponsePackage<string>(token, true, "Login successful");
            }
            catch (Exception ex)
            {
                return new ResponsePackage<string>(false, ex.Message);
            }
        }

    }
}
