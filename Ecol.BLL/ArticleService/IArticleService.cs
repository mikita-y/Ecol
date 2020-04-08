using Ecol.BLL.Result;
using Ecol.DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecol.BLL.ArticleService
{
    public interface IArticleService
    {
        Task<IEnumerable<Article>> GetArticleListAsync();
        Task<OperationDetails> CreateArticleAsync(Article order);
        Task<Article> GetArticleByIdAsync(int id);
        Task<OperationDetails> UpdateArticleAsync(Order order);
        Task<OperationDetails> DeleteArticleByIdAsync(int id);
    }
}
