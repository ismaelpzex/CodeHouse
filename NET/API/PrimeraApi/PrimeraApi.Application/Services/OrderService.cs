using System.ComponentModel.DataAnnotations;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Mappers;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Office;
using PrimeraApi.BusinessModels.Models.Order;
using PrimeraApi.DataAccess.Contracts;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.Application.Services
{
    public class OrderService : IOrderService
    {
        private IOrdersRepository _ordersRepository;
        private IUnitOfWork _UoW;

        public OrderService(IOrdersRepository orderRepository, IUnitOfWork UoW)
        {
            _ordersRepository = orderRepository;
            _UoW = UoW;
        }

        public PaginatedResponse<OrderResponse> GetOrderPaginated(OrderSearchRequest request)
        {
            PaginatedResponse<OrderResponse> result = new PaginatedResponse<OrderResponse>();
            PaginatedDTO<OrderDTO> search = _ordersRepository.GetOrdersPaginated(request.Status, request.Page, request.ItemsPerPage);

            result.Result = OrderMapper.MapToOrderResponseListFromOrderDTOList(search.Result);
            result.Total = search.Total;
            result.Page = search.Page;
            result.ItemsPerPage = search.ItemsPerPage;

            return result;
        }

        public OrderResponse? GetOrderByCode(string status)
        {
            OrderDTO? order = _ordersRepository.GetOrderByCode(status);

            if (order != null)
            {
                OrderResponse result = OrderMapper.MapOrderResponseFromOrderDTO(order);
                return result;
            }
            else return null;
        }

        public bool DeleteOrder([Required] string status)
        {
            OrderDTO? order = _ordersRepository.GetOrderByCode(status);

            if (order != null)
            {
                _ordersRepository.DeleteOrder(order);
                _UoW.Commit();
                return true;
            }
            return false;
        }

        public OrderResponse? AddOrder(CreateOrderRequest request)
        {
            OrderDTO? existingOffice = _ordersRepository.GetOrderByCode(request.Status);

            if (existingOffice == null)
            {
                OrderDTO orderToInsert = OrderMapper.MapToOrderDTOFromCreateOrderRequest(request);
                OrderDTO OrderInserted = _ordersRepository.AddOrder(orderToInsert);
                _UoW.Commit();
                OrderResponse result = OrderMapper.MapOrderResponseFromOrderDTO(OrderInserted);
                return result;
            }
            else return null;
        }

        public OrderResponse? UpdateOrder([Required] string status, UpdateOrderRequest request)
        {
            OrderDTO? existingOrder = _ordersRepository.GetOrderByCode(status);

            if (existingOrder != null)
            {
                existingOrder.OrderDate = request.OrderDate;
                existingOrder.OrderNumber = request.OrderNumber;
                existingOrder.RequiredDate = request.RequiredDate;
                existingOrder.ShippedDate = request.ShippedDate;
                existingOrder.Comments = request.Comments;
                existingOrder.CustomerNumber = request.CustomerNumber;

                OrderDTO orderUpdated = _ordersRepository.UpdateOrder(existingOrder);
                _UoW.Commit();

                OrderResponse result = OrderMapper.MapOrderResponseFromOrderDTO(orderUpdated);
                return result;
            }
            else return null;
        }
    }
}

