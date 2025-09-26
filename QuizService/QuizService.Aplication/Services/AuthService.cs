using QuizService.Aplication.DTOs.Auth;
using QuizService.Aplication.Interfaces.Repositories;
using QuizService.Aplication.Interfaces.Services.Auth;
using QuizService.Domain.Models;
using BCrypt.Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QuizService.Domain.Enums;
using QuizService.Aplication.Interfaces.Security;

namespace QuizService.Aplication.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserReposotory _userRepository;
        private readonly IJwtGenerator _jwtGenerator;

        public AuthService(IUserReposotory userRepository, IJwtGenerator jwtGenerator)
        {
            _userRepository = userRepository;
            _jwtGenerator = jwtGenerator;
        }

        public async Task<string> LoginAsync(LoginDTO loginDTO, CancellationToken ct = default)
        {
            if(loginDTO == null) 
                throw new ArgumentNullException(nameof(loginDTO));

            if(string.IsNullOrWhiteSpace(loginDTO.UsernameOrEmail))
                throw new ArgumentException("Username or Email cannot be empty");

            if(string.IsNullOrWhiteSpace(loginDTO.Password))
                throw new ArgumentException("Password cannot be empty");

            var user = await _userRepository.FirstOrDefaultAsync(u => 
                u.Username == loginDTO.UsernameOrEmail || u.Email == loginDTO.UsernameOrEmail, ct);

            if(user == null || !BCrypt.Net.BCrypt.Verify(loginDTO.Password, user.PasswordHash))
                throw new UnauthorizedAccessException("Invalid username/email or password");

            return _jwtGenerator.GenerateToken(user);

        }

        public async Task RegisterUserAsync(RegisterDTO registerDTO, CancellationToken ct = default)
        {
            if(registerDTO == null) 
                throw new ArgumentNullException(nameof(registerDTO));

            if(string.IsNullOrWhiteSpace(registerDTO.Name))
                throw new ArgumentException("Name cannot be empty");

            if(string.IsNullOrWhiteSpace(registerDTO.Username))
                throw new ArgumentException("Username cannot be empty");

            if(string.IsNullOrWhiteSpace(registerDTO.Email))
                throw new ArgumentException("Email cannot be empty");

            if(string.IsNullOrWhiteSpace(registerDTO.Password))
                throw new ArgumentException("Password cannot be empty");

            if(registerDTO.Password != registerDTO.RepeatPassword)
                throw new ArgumentException("Passwords do not match");

            if(registerDTO.Password != registerDTO.RepeatPassword)
                throw new ArgumentException("Passwords do not match");

            User newUser = new User
            {
                Id = Guid.NewGuid(),
                Name = registerDTO.Name,
                Username = registerDTO.Username,
                Email = registerDTO.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(registerDTO.Password),
                Role = UserRole.User
            };

            await _userRepository.AddAsync(newUser, ct);
            await _userRepository.SaveChangesAsync(ct);

        }
    }
}
