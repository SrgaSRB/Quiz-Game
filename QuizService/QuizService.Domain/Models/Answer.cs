using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class Answer : Entity
    {
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public Guid QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
