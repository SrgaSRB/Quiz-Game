using QuizService.Aplication.Interfaces.Persistence;
using QuizService.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Interfaces.Repositories
{
    public interface ICategoryRepository : IGenericRepository<Category>
    {
    }
}
