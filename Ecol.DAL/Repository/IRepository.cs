using System.Linq;
using System.Threading.Tasks;

namespace Ecol.DAL.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetAll();

        Task<TEntity> GetByIdAsync(int id);

        Task CreateAsync(TEntity entity);

        Task Update(int id, TEntity entity);

        Task DeleteByIdAsync(int id);
    }
}
