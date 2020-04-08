using Ecol.BLL.Result;
using Ecol.DAL.Context;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace Ecol.BLL.AuthenticationService
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly EcolDbContext _db;

        public AuthenticationService(EcolDbContext dbContext)
        {
            _db = dbContext;
        }

        public async Task<OperationDetails> CheckPasswordAsync(string login, string password)
        {

            var user = await Task.Run(() => _db.Administrators.FirstOrDefault(x => x.Login.Equals(login)));

            if(user == null)
            {
                return new OperationDetails(false, "Login not found.");
            }

            using (SHA256 sha256Hash = SHA256.Create())
            {
                string hash = HashHelper.GetHash(sha256Hash, password);

                if (HashHelper.VerifyHash(sha256Hash, user.PasswordHash, hash))
                {
                    return new OperationDetails(true);
                }

                return new OperationDetails(false, "Password is incorrect.");
            }
        }
    }
}
