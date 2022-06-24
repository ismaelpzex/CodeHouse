using System;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
    public interface IOrderDetailRepository
    {
        OrderDetailDTO? GetOrderDetailByCode(int code);
        void DeleteOrderDetail(OrderDetailDTO orderDetail);
        OrderDetailDTO AddOrder(OrderDetailDTO orderDetail);
        public OrderDetailDTO UpdateOrder(OrderDetailDTO orderDetail);
    }
}

