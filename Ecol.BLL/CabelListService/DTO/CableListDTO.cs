using Ecol.DAL.Entities;
using System.Collections.Generic;

namespace Ecol.BLL.CabelListService.DTO
{
    public class CableListDTO
    {
        public IEnumerable<Cable> CableList { get; set; }
        public CriterionSetting CriterionSetting { get; set; }
    }
}
