using Ecol.BLL.Result;
using Ecol.DAL.Entities;
using System.Threading.Tasks;

namespace Ecol.BLL.CableService
{
    public interface ICableService
    {
        Task<Cable> GetCabelByIdAsync(int id);
        Task<OperationDetails> CreateCabelAsync(Cable cabel);
        Task<OperationDetails> DeleteCabelByIdAsync(int cabelId);
        Task<OperationDetails> UpdateCabelAsync(Cable cabel);
    }
}
