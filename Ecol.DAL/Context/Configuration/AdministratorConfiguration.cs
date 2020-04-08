using Ecol.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Ecol.DAL.Context.Configuration
{
    class AdministratorConfiguration : IEntityTypeConfiguration<Administrator>
    {
        public void Configure(EntityTypeBuilder<Administrator> builder)
        {
            builder.HasData(
            new Administrator[]
            {
                new Administrator { Id = 1, Login = "Sveta", PasswordHash = "Zhdan"},
                new Administrator { Id = 2, Login = "Volha", PasswordHash = "Potapova"}
            });
        }
    }
}
