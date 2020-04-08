using System;
using System.Collections.Generic;

namespace Ecol.BLL.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime CreationDate { get; set; }
        public ICollection<OrderedCableDTO> CabelOrders { get; set; }
    }
}
