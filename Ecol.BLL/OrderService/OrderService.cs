using Ecol.BLL.Common;
using Ecol.BLL.Result;
using Ecol.DAL.Context;
using Ecol.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecol.BLL.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly EcolDbContext _db;

        public OrderService(EcolDbContext db)
        {
            _db = db;
        }
        public async Task<OperationDetails> CreateOrderAsync(Order order)
        {
            await _db.AddAsync(order);
            return await Save();
        }

        public async Task<OperationDetails> DeleteOrderByIdAsync(int id)
        {
            var order = await _db.Cabels.FindAsync(id);

            if (order == null)
            {
                return new OperationDetails(false, "Item not found");
            }

            _db.Cabels.Remove(order);
            return await Save();
        }

        public async Task<Order> GetOrderByIdAsync(int id)
        {
            return await _db.Orders.FindAsync(id);
        }

        public async Task<OperationDetails> UpdateOrderAsync(Order order)
        {
            _db.Orders.Update(order);
            return await Save();
        }

        public async Task<IEnumerable<Order>> GetOrderListAsync(SortingCriterion criterion)
        {
            IQueryable<Order> orders = _db.Orders;

            await Task.Run(() =>
            {
                orders = ApplySorting(orders, criterion);
                orders = orders.GetPage(criterion.PageNumber, criterion.PageSize);
            });

            return orders;
        }

        private IQueryable<Order> ApplySorting(IQueryable<Order> orders, SortingCriterion criterion)
        {
            switch (criterion.Sorting)
            {
                case Sorting.Newer:
                    return orders.OrderBy(x => x.CreationDate);
                case Sorting.Older:
                    return orders.OrderByDescending(x => x.CreationDate);
                default:
                    return orders;
            }
        }
   

        private async Task<OperationDetails> Save()
        {
            try
            {
                await _db.SaveChangesAsync();
                return new OperationDetails(true);
            }
            catch (Exception e)
            {
                return new OperationDetails(false, e.Message);
            }
        }
    }
}
