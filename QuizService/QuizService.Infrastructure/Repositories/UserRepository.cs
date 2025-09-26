using Microsoft.EntityFrameworkCore;
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
    public class UserRepository : GenericRepository<User>, IUserReposotory
    {
        public UserRepository(AppDbContext context) : base(context)
        {
        }

        public Task<User?> GetByUsernameAsync(string username, CancellationToken ct = default)
        {
            return _dbSet.FirstOrDefaultAsync(u => u.Username == username, ct);
        }
    }
}
