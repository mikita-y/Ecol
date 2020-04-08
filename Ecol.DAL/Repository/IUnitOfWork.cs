using Ecol.DAL.Entities;
namespace Ecol.DAL.Repository
{
    public interface IUnitOfWork
    {
        IRepository<Administrator> Administrators { get; }
        IRepository<Article> Articles { get; }
        IRepository<Cable> Cabels { get; }
        IRepository<Order> Orders { get;  }
        IRepository<UserMessage> UserMessages { get; }
    }
}
