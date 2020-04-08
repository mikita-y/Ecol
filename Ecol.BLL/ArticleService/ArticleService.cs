using Ecol.BLL.Pagination;
using Ecol.BLL.Result;
using Ecol.DAL.Context;
using Ecol.DAL.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecol.BLL.ArticleService
{
    public class ArticleService : IArticleService
    {
        private readonly EcolDbContext _db;

        public ArticleService(EcolDbContext db)
        {
            _db = db;
        }

        public async Task<OperationDetails> CreateArticleAsync(Article order)
        {
            _db.Articles.Add(order);
            await _db.SaveChangesAsync();
            return new OperationDetails(true);
        }

        public Task<OperationDetails> DeleteArticleByIdAsync(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Article> GetArticleByIdAsync(int id)
        {
            return await _db.Articles.FindAsync(id);
        }

        public async Task<IEnumerable<Article>> GetArticleListAsync()
        {
            return _db.Articles;
        }

        public Task<OperationDetails> UpdateArticleAsync(Order order)
        {
            throw new System.NotImplementedException();
        }

        /*private IQueryable<Order> ApplySorting(IQueryable<Order> orders, SortingCriterion criterion)
        {
            switch (criterion.Sorting)
            {
                case Sorting.Newer:
                    return orders.OrderBy(x => x.CreationDate);
                case Sorting.Older:
                    return orders.OrderByDescending(x => x.CreationDate);
                default:
                    return orders;
            }
        }*/
    }
}
