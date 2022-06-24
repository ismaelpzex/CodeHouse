using System;
using System.ComponentModel.DataAnnotations;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Order;

namespace PrimeraApi.Application.Contracts.Services
{
    public interface IOrderService
    {
        PaginatedResponse<OrderResponse> GetOrderPaginated(OrderSearchRequest request);
        OrderResponse? GetOrderByCode(string status);
        bool DeleteOrder([Required] string status);
        OrderResponse? AddOrder(CreateOrderRequest request);
        OrderResponse? UpdateOrder([Required] string status, UpdateOrderRequest request);
    }
}

