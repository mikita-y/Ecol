using Ecol.DAL.Context;
using Ecol.DAL.Entities;

namespace Ecol.DAL.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private EcolDbContext _dbContext;
        private IRepository<Administrator> _administrators;
        private IRepository<Article> _articles;
        private IRepository<Cable> _cabels;
        private IRepository<Order> _orders;
        private IRepository<UserMessage> _userMessages;

        public UnitOfWork(EcolDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IRepository<Administrator> Administrators
        {
            get
            {
                if(_administrators == null)
                {
                    _administrators = new Repository<Administrator>(_dbContext);
                }
                return _administrators;
            }
        }

        public IRepository<Article> Articles
        {
            get
            {
                if (_articles == null)
                {
                    _articles = new Repository<Article>(_dbContext);
                }
                return _articles;
            }
        }

        public IRepository<Cable> Cabels
        {
            get
            {
                if (_cabels == null)
                {
                    _cabels = new Repository<Cable>(_dbContext);
                }
                return _cabels;
            }
        }

        public IRepository<Order> Orders
        {
            get
            {
                if (_orders == null)
                {
                    _orders = new Repository<Order>(_dbContext);
                }
                return _orders;
            }
        }

        public IRepository<UserMessage> UserMessages
        {
            get
            {
                if (_userMessages == null)
                {
                    _userMessages = new Repository<UserMessage>(_dbContext);
                }
                return _userMessages;
            }
        }
    }
}
