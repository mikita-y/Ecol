using Ecol.DAL.Entities;

namespace Ecol.BLL.CabelListService
{
    public class SortingCriterion
    {
        public string Marking { get; set; }
        public string AdditionalMarking { get; set; }
        public Performance? Performance { get; set; }
        public Twist? Twist { get; set; }
        public int? PairsNumber { get; set; }
        public double? Section { get; set; }
    }
}
