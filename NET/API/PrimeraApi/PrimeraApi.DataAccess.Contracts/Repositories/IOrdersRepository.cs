
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
    public interface IOrdersRepository
    {
        public PaginatedDTO<OrderDTO> GetOrdersPaginated(string status = "", int? page = 1, int? itemsPerPage = 5);
        OrderDTO? GetOrderByCode(string code);
        void DeleteOrder(OrderDTO order);
        public OrderDTO AddOrder(OrderDTO order);
        OrderDTO UpdateOrder(OrderDTO order);
    }
}

