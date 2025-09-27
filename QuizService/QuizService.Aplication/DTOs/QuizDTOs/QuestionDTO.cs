using QuizService.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.DTOs.QuizDTOs
{
    public class QuestionDTO
    {
        public string Text { get; set; }
        public int Points { get; set; }
        public QuestionType Type { get; set; }
        public QuestionDifficulty? Difficulty { get; set; } = null;
        public List<AnswerDTO> Answers { get; set; }
    }
}
