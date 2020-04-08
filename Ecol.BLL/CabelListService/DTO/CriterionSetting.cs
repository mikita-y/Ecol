using System.Collections.Generic;

namespace Ecol.BLL.CabelListService.DTO
{
    public class CriterionSetting
    {
        public IEnumerable<string> MarkingList { get; set; }
        public IEnumerable<string> AdditionalMarkingList { get; set; }
        public IEnumerable<int> PairsNumberList { get; set; }
        public IEnumerable<double> SectionList { get; set; }
    }
}
