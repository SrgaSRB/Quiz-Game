using QuizService.Aplication.Interfaces.Repositories;
using QuizService.Domain.Models;
using QuizService.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Infrastructure.Repositories
{
    public class QuizRepository : GenericRepository<Quiz>, IQuizReposotory
    {
        public QuizRepository(AppDbContext context) : base(context)
        {
        }
    }
}
