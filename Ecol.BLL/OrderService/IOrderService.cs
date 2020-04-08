using Ecol.BLL.Result;
using Ecol.DAL.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ecol.BLL.OrderService
{
    public interface IOrderService
    {
        Task<IEnumerable<Order>> GetOrderListAsync(SortingCriterion criterion);
        Task<OperationDetails> CreateOrderAsync(Order order);
        Task<Order> GetOrderByIdAsync(int id);
        Task<OperationDetails> UpdateOrderAsync(Order order);
        Task<OperationDetails> DeleteOrderByIdAsync(int id);
    }
}
