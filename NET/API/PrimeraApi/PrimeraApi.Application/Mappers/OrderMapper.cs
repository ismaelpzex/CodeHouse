using System;
using PrimeraApi.BusinessModels.Models.Order;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.Application.Mappers
{
    public class OrderMapper
    {
		public static OrderResponse MapOrderResponseFromOrderDTO(OrderDTO request)
		{
			OrderResponse result = new OrderResponse
			{
				Status = request.Status,
				Comments = request.Comments,
				CustomerNumber = request.CustomerNumber,
				OrderDate = request.OrderDate,
				OrderNumber = request.OrderNumber,
				RequiredDate = request.RequiredDate,
				ShippedDate = request.ShippedDate,
			};

			return result;
		}


		public static OrderDTO MapToOrderDTOFromCreateOrderRequest(CreateOrderRequest request)
		{
			OrderDTO result = new OrderDTO
			{
				Status = request.Status,
				Comments = request.Comments,
				CustomerNumber = request.CustomerNumber,
				OrderDate = request.OrderDate,
				OrderNumber = request.OrderNumber,
				RequiredDate = request.RequiredDate,
				ShippedDate = request.ShippedDate,

			};

			return result;
		}


		public static List<OrderResponse> MapToOrderResponseListFromOrderDTOList(List<OrderDTO> orders)
		{
			return orders.Select(pl => MapOrderResponseFromOrderDTO(pl)).ToList();
		}
	}

}


