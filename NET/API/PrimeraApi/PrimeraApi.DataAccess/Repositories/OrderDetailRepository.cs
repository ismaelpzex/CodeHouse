
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Entities;
using PrimeraApi.DataAccess.Mappers;

namespace PrimeraApi.DataAccess.Repositories
{
    public class OrderDetailRepository : IOrderDetailRepository
    {
        private ApplicationDbContext _context;

        public OrderDetailRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public OrderDetailDTO? GetOrderDetailByCode(int code)
        {
            var query = from ord in _context.Orderdetails
                        where ord.OrderNumber == code
                        select OrderDetailMapper.MapOrderDetailDTOfromOrderdetail(ord);

            return query.FirstOrDefault();
        }

        public void DeleteOrderDetail(OrderDetailDTO orderDetail)
        {
            Orderdetail orderToDelete = OrderDetailMapper.MapOrderDetailFromOrderDetailDTO(orderDetail);
            _context.Orderdetails.Remove(orderToDelete);
        }

        public OrderDetailDTO AddOrder(OrderDetailDTO orderDetail)
        {
            Orderdetail newOrderDetail = OrderDetailMapper.MapOrderDetailFromOrderDetailDTO(orderDetail);

            var orderDetailInserted = _context.Orderdetails.Add(newOrderDetail);

            OrderDetailDTO result = OrderDetailMapper.MapOrderDetailDTOfromOrderdetail(orderDetailInserted.Entity);

            return result;
        }

        public OrderDetailDTO UpdateOrder(OrderDetailDTO orderDetail)
        {
            Orderdetail orderDetailToUpdate = OrderDetailMapper.MapOrderDetailFromOrderDetailDTO(orderDetail);

            var orderDetailUpdated = _context.Orderdetails.Add(orderDetailToUpdate);

            OrderDetailDTO result = OrderDetailMapper.MapOrderDetailDTOfromOrderdetail(orderDetailUpdated.Entity);

            return result;
        }

    }
}



