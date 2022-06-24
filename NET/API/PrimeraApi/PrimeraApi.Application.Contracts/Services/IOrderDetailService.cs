using System;
using PrimeraApi.BusinessModels.Models.OrderDetail;

namespace PrimeraApi.Application.Contracts.Services
{
    public interface IOrderDetailService
    {
        public OrderDetailResponse? GetOrderDetailByCode(int code);
    }
}

