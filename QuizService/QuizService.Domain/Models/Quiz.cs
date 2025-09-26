using QuizService.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class Quiz : Entity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int TimeLimitMinutes { get; set; }
        public QuizDifficulty DifficultyLevel { get; set; } 

        public Guid CategoryId { get; set; }
        public Guid CreatedByUserId { get; set; }

        public Category Category { get; set; }
        public User CreatedBy { get; set; }
        public ICollection<Question> Questions { get; set; }
        public ICollection<QuizAttempt> QuizAttempts { get; set; }
    }
}
