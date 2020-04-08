using Ecol.DAL.Context.Configuration;
using Ecol.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace Ecol.DAL.Context
{
    public class EcolDbContext : DbContext
    {
        public DbSet<Cable> Cabels { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<CabelOrder> CabelOrders { get; set; }
        public DbSet<Administrator> Administrators { get; set; }
        public DbSet<UserMessage> UserMessages { get; set; }
        public DbSet<Article> Articles { get; set; }

        public EcolDbContext(DbContextOptions<EcolDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CabelConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new CabelOrderConfiguration());
            modelBuilder.ApplyConfiguration(new AdministratorConfiguration());
        }
    }
}
