using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class UserAnswer : Entity
    {
        public string? AnswerText { get; set; } 
        public bool? BooleanAnswer { get; set; }

        public Guid QuizAttemptId { get; set; }
        public Guid QuestionId { get; set; }

        public QuizAttempt QuizAttempt { get; set; }
        public Question Question { get; set; }
        public ICollection<UserAnswerSelection> UserAnswerSelections { get; set; }
    }
}
