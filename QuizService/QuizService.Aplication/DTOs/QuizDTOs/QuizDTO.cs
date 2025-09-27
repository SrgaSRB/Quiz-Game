using QuizService.Domain.Enums;
using QuizService.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.DTOs.QuizDTOs
{
    public class QuizDTO
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public int TimeLimitMinutes { get; set; }
        public QuizDifficulty DifficultyLevel { get; set; }
        public string CategoryId { get; set; } = ""; 
        public string NewCategoryName { get; set; } = "";
        public List<QuestionDTO> Questions { get; set; } = new();
    }

}
