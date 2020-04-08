using Ecol.BLL.CabelListService.DTO;
using System.Threading.Tasks;

namespace Ecol.BLL.CabelListService
{
    public interface ICableListService
    {
        Task<CableListDTO> GetCableListAsync(SortingCriterion criterion);
    }
}