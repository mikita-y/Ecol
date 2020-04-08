using System.Collections.Generic;

namespace Ecol.DAL.Entities
{
    public enum Performance {zero, ngA, ngA_LS, ngA_FRLS, nga_HF, nga_FRHF }
    public enum Twist {veined = 1, dual }

    public class Cable
    {
        public int Id { get; set; }
        public string Marking { get; set; }
        public string AdditionalMarking { get; set; }
        public Performance Performance { get; set; }
        public Twist Twist { get; set; }
        public double Price { get; set; }
        public int PairsNumber { get; set; }
        public double Section { get; set; }
        public ICollection<CabelOrder> CabelOrders { get; set; }
    }
}
