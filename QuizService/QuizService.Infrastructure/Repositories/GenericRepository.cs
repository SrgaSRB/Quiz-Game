using Microsoft.EntityFrameworkCore;
using QuizService.Aplication.Interfaces.Persistence;
using QuizService.Domain.Models;
using QuizService.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Infrastructure.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : Entity
    {
        private readonly AppDbContext _context;
        protected readonly DbSet<T> _dbSet;

        public GenericRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public virtual async Task AddAsync(T entity, CancellationToken ct = default)
        {
            await _dbSet.AddAsync(entity, ct);
        }

        public virtual async Task AddRangeAsync(IEnumerable<T> entities)
        {
            await _dbSet.AddRangeAsync(entities);
        }

        public virtual void Delete(T entity, CancellationToken ct = default)
        {
            _dbSet.Remove(entity);
        }

        public virtual async Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate, CancellationToken ct = default)
        {
            return await _dbSet.AnyAsync(predicate);
        }

        public virtual async Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate, CancellationToken ct = default)
        {
            return await _dbSet.Where(predicate).ToListAsync(ct);
        }

        public virtual async Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate, CancellationToken ct = default)
        {
            return await _dbSet.FirstOrDefaultAsync(predicate);
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync(CancellationToken ct = default)
        {
            return await _dbSet.AsNoTracking().ToListAsync(ct);
        }

        public virtual async Task<T?> GetByIdAsync(Guid id, CancellationToken ct = default)
        {
            return await _dbSet.FindAsync(id);
        }

        public virtual void RemoveRange(IEnumerable<T> entities)
        {
            _dbSet.RemoveRange(entities);
        }

        public virtual async Task SaveChangesAsync(CancellationToken ct = default)
        {
            await _context.SaveChangesAsync(ct);
        }

        public virtual void Update(T entity, CancellationToken ct = default)
        {
            _dbSet.Update(entity);
        }

        public async Task<List<TResult>> QueryAsync<TResult>(Func<IQueryable<T>, IQueryable<TResult>> query, CancellationToken ct = default)
        {
            var q = _dbSet.AsNoTracking().AsQueryable();
            return await query(q).ToListAsync(ct);
        }
    }
}
