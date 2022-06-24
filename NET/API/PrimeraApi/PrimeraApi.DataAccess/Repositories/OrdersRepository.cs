using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Entities;
using PrimeraApi.DataAccess.Mappers;

namespace PrimeraApi.DataAccess.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        private ApplicationDbContext _context;

        public OrdersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public PaginatedDTO<OrderDTO> GetOrdersPaginated(string status = "", int? page = 1, int? itemsPerPage = 5)
        {
            PaginatedDTO<OrderDTO> result = new PaginatedDTO<OrderDTO>();

            var query = from or in _context.Orders
                        where (string.IsNullOrEmpty(status) || or.Status.Contains(status))
                        select OrderMapper.MapOrderDTOfromOrder(or);

            result.Total = query.Count();
            result.Page = page.Value;
            result.ItemsPerPage = itemsPerPage.Value;
            result.Result = query.Skip((page.Value - 1) * itemsPerPage.Value).Take(itemsPerPage.Value).ToList();

            return result;
        }

        public OrderDTO? GetOrderByCode(string status)
        {
            var query = from or in _context.Orders
                        where or.Status == status
                        select OrderMapper.MapOrderDTOfromOrder(or);

            return query.FirstOrDefault();
        }

        public void DeleteOrder(OrderDTO order)
        {
            Order orderToDelete = OrderMapper.MapOrderFromOrderDTO(order);
            _context.Orders.Remove(orderToDelete);
        }

        public OrderDTO AddOrder(OrderDTO order)
        {
            Order newOrder = OrderMapper.MapOrderFromOrderDTO(order);

            var orderInserted = _context.Orders.Add(newOrder);

            OrderDTO result = OrderMapper.MapOrderDTOfromOrder(orderInserted.Entity);

            return result;
        }

        public OrderDTO UpdateOrder(OrderDTO order)
        {
            Order orderToUpdate = OrderMapper.MapOrderFromOrderDTO(order);

            var orderUpdated = _context.Orders.Add(orderToUpdate);

            OrderDTO result = OrderMapper.MapOrderDTOfromOrder(orderUpdated.Entity);

            return result;
        }
    }
}

