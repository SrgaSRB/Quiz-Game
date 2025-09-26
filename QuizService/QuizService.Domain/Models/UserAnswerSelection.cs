using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Domain.Models
{
    public class UserAnswerSelection : Entity
    {
        public Guid UserAnswerId { get; set; }
        public Guid AnswerId { get; set; }

        public UserAnswer UserAnswer { get; set; }
        public Answer Answer { get; set; }
    }
}
