using Ecol.DAL.Entities;
using System.Collections.Generic;

namespace Ecol.BLL.CableListService.DTO
{
    public class CableListDTO
    {
        public IEnumerable<Cable> CableList { get; set; }
        public CriterionSetting CriterionSetting { get; set; }
        public PageSetting PageSetting { get; set; }
    }
}
