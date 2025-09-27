using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Aplication.Interfaces.Persistence
{
    public interface IGenericRepository<T> where T : class
    {
        Task<T?> GetByIdAsync(Guid id, CancellationToken ct = default);
        Task<IEnumerable<T>> GetAllAsync(CancellationToken ct = default);
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate, CancellationToken ct = default);
        Task<T?> FirstOrDefaultAsync(Expression<Func<T, bool>> predicate, CancellationToken ct = default);
        Task<bool> ExistsAsync(Expression<Func<T, bool>> predicate, CancellationToken ct = default);
        public Task<List<TResult>> QueryAsync<TResult>(Func<IQueryable<T>, IQueryable<TResult>> query, CancellationToken ct = default);


        Task AddAsync(T entity, CancellationToken ct = default);
        Task AddRangeAsync(IEnumerable<T> entities);
        void Update(T entity, CancellationToken ct = default);
        void Delete(T entity, CancellationToken ct = default);
        void RemoveRange(IEnumerable<T> entities);

        Task SaveChangesAsync(CancellationToken ct = default);
    }
}
