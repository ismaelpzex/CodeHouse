using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Entities;
namespace PrimeraApi.DataAccess.Mappers
{
    public class OrderMapper
    {
        public static OrderDTO MapOrderDTOfromOrder(Order request)
        {
            OrderDTO result = new OrderDTO
            {
                OrderNumber = request.OrderNumber,
                Comments = request.Comments,
                CustomerNumber = request.CustomerNumber,
                OrderDate = request.OrderDate,
                RequiredDate = request.RequiredDate,
                ShippedDate = request.ShippedDate,
                Status = request.Status,
            };

            return result;
        }

        public static Order MapOrderFromOrderDTO(OrderDTO request)
        {
            Order result = new Order
            {
                OrderNumber = request.OrderNumber,
                Comments = request.Comments,
                CustomerNumber = request.CustomerNumber,
                OrderDate = request.OrderDate,
                RequiredDate = request.RequiredDate,
                ShippedDate = request.ShippedDate,
                Status = request.Status,
            };

            return result;
        }
    }
}

