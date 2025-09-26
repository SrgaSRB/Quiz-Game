using QuizService.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class Question : Entity
    {
        public string Text { get; set; }
        public QuestionType Type { get; set; } 
        public int Points { get; set; }
        public QuestionDifficulty? Difficulty { get; set; } 

        public Guid QuizId { get; set; }
        public Quiz Quiz { get; set; }

        public ICollection<Answer> Answers { get; set; }
        public ICollection<UserAnswer> UserAnswers { get; set; }
    }
}
