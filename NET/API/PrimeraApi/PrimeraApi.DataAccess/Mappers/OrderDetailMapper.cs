using System;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Entities;

namespace PrimeraApi.DataAccess.Mappers
{
    public class OrderDetailMapper
    {
        public static OrderDetailDTO MapOrderDetailDTOfromOrderdetail(Orderdetail request)
        {
            OrderDetailDTO result = new OrderDetailDTO
            {
                OrderNumber = request.OrderNumber,
                OrderLineNumber = request.OrderLineNumber,
                PriceEach = request.PriceEach,
                ProductCode = request.ProductCode,
                QuantityOrdered = request.QuantityOrdered
            };

            return result;
        }

        public static Orderdetail MapOrderDetailFromOrderDetailDTO(OrderDetailDTO request)
        {
            Orderdetail result = new Orderdetail
            {
                OrderNumber = request.OrderNumber,
                OrderLineNumber = request.OrderLineNumber,
                PriceEach = request.PriceEach,
                ProductCode = request.ProductCode,
                QuantityOrdered = request.QuantityOrdered
            };

            return result;
        }
    }
}

