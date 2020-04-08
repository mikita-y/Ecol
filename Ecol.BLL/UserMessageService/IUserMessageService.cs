using Ecol.BLL.Result;
using Ecol.DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecol.BLL.UserMessageService
{
    public interface IUserMessageService
    {
        Task<IEnumerable<UserMessage>> GetUSerMessagesAsync();
        Task<OperationDetails> CreateUserMessageAsync(Cable cabel);
        Task<OperationDetails> DeleteUserMessageByIdAsync(int cabelId);
    }
}
