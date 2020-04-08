namespace Ecol.DAL.Entities
{
    public class CabelOrder
    {
        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int CabelId { get; set; }
        public Cable Cabel { get; set; }
        public double Length { get; set; }
    }
}
