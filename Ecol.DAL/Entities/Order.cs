using System;
using System.Collections.Generic;

namespace Ecol.DAL.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime CreationDate { get; set; }
        public ICollection<CabelOrder> CabelOrders {get; set;}
    }
}
