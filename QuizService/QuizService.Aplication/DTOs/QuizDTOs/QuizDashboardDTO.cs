using QuizService.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.DTOs.QuizDTOs
{
    public class QuizDashboardDTO
    {
        public string Title { get; set; } = "";
        public string Description { get; set; } = "";
        public int TotalQuestions { get; set; }
        public int TimeLimitMinutes { get; set; }
        public int TotalAttempts { get; set; }
        public string CategoryName { get; set; } = "";
        public QuizDifficulty DifficultyLevel { get; set; } 
        public ICollection<string> Tags { get; set; } 
    }
}
