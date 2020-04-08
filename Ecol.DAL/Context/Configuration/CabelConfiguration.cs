using Ecol.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecol.DAL.Context.Configuration
{
    class CabelConfiguration : IEntityTypeConfiguration<Cable>
    {
        public void Configure(EntityTypeBuilder<Cable> builder)
        {
            builder.Property(x => x.Marking).IsRequired();
            builder.Property(x => x.PairsNumber).IsRequired();
            builder.Property(x => x.Section).IsRequired();
        }
    }
}
