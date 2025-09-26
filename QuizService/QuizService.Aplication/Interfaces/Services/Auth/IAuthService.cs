using QuizService.Aplication.DTOs.Auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Interfaces.Services.Auth
{
    public interface IAuthService
    {
        Task RegisterUserAsync(RegisterDTO registerDTO, CancellationToken ct = default);
        Task<string> LoginAsync(LoginDTO loginDTO, CancellationToken ct = default);
    }
}
