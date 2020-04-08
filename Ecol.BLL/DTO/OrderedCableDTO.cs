using Ecol.DAL.Entities;

namespace Ecol.BLL.DTO
{
    public class OrderedCableDTO
    {
        public int Id { get; set; }
        public string Marking { get; set; }
        public string AdditionalMarking { get; set; }
        public Performance Performance { get; set; }
        public Twist Twist { get; set; }
        public double Price { get; set; }
        public int PairsNumber { get; set; }
        public double Section { get; set; }
        public double Length { get; set; }
    }
}
