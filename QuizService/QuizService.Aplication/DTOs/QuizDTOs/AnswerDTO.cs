using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.DTOs.QuizDTOs
{
    public class AnswerDTO
    {
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
    }
}
