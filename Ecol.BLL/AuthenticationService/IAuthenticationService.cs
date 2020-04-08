using Ecol.BLL.Result;
using System.Threading.Tasks;

namespace Ecol.BLL.AuthenticationService
{
    public interface IAuthenticationService
    {
        Task<OperationDetails> CheckPasswordAsync(string login, string password);
    }
}