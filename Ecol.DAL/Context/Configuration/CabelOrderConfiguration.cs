using Ecol.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecol.DAL.Context.Configuration
{
    class CabelOrderConfiguration : IEntityTypeConfiguration<CabelOrder>
    {
        public void Configure(EntityTypeBuilder<CabelOrder> builder)
        {
            builder.HasKey(x => new { x.CabelId, x.OrderId });

            builder.HasOne(x => x.Order)
                .WithMany(y => y.CabelOrders)
                .HasForeignKey(x => x.OrderId);

            builder.HasOne(x => x.Cabel)
                .WithMany(y => y.CabelOrders)
                .HasForeignKey(x => x.CabelId);
        }
    }
}
