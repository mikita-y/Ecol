using Ecol.DAL.Entities;

namespace Ecol.BLL.CableListService
{
    public class CableListCriterion
    {
        public string Marking { get; set; }
        public string AdditionalMarking { get; set; }
        public Performance? Performance { get; set; }
        public Twist? Twist { get; set; }
        public int? PairsNumber { get; set; }
        public double? Section { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
