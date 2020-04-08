namespace Ecol.BLL.OrderService
{
    public enum Sorting { Newer, Older}

    public class SortingCriterion
    {
        public Sorting Sorting { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
}
