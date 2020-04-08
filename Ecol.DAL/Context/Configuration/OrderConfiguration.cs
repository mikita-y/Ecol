using Ecol.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecol.DAL.Context.Configuration
{
    class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.Property(b => b.FullName).IsRequired().HasMaxLength(50);
            builder.Property(b => b.PhoneNumber).IsRequired().HasMaxLength(50);
        }
    }
}
