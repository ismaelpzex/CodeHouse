using System;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Mappers;
using PrimeraApi.BusinessModels.Models.OrderDetail;
using PrimeraApi.DataAccess.Contracts;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.Application.Services
{
    public class OrderDetailService : IOrderDetailService
    {

        private IOrderDetailRepository _orderDetailRepository;
        private IUnitOfWork _UoW;
        public OrderDetailService(IOrderDetailRepository orderDetailRepository, IUnitOfWork UoW)
        {
            _orderDetailRepository = orderDetailRepository;
            _UoW = UoW;
        }

        public OrderDetailResponse? GetOrderDetailByCode(int code)
        {
            OrderDetailDTO? orderDetail = _orderDetailRepository.GetOrderDetailByCode(code);

            if (orderDetail != null)
            {
                OrderDetailResponse result = OrderDetailMapper.MapOrderDetailResponseFromOrderDetailDTO(orderDetail);
                return result;
            }
            else return null;
        }
    }
}

