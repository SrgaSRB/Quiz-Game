using QuizService.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string? ProfileImage { get; set; }
        public UserRole Role { get; set; }

        public ICollection<QuizAttempt> QuizAttempts { get; set; }
    }
}
