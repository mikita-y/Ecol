using Ecol.BLL.CableListService.DTO;
using System.Threading.Tasks;

namespace Ecol.BLL.CableListService
{
    public interface ICableListService
    {
        Task<CableListDTO> GetCableListAsync(CableListCriterion criterion);
    }
}