using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class QuizAttempt : Entity
    {
        public DateTime StartedAt { get; set; }
        public DateTime? CompletedAt { get; set; }
        public int Score { get; set; }
        public decimal Percentage { get; set; }
        public int TimeSpentSeconds { get; set; }

        public Guid UserId { get; set; }
        public Guid QuizId { get; set; }

        public User User { get; set; }
        public Quiz Quiz { get; set; }
        public ICollection<UserAnswer> UserAnswers { get; set; }
    }
}
