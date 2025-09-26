using QuizService.Aplication.DTOs.Auth;
using QuizService.Aplication.Interfaces.Services;
using QuizService.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Interfaces.Security
{
    public interface IJwtGenerator
    {
        public string GenerateToken(User user);
    }
}
