using System;
using PrimeraApi.BusinessModels.Models.OrderDetail;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.Application.Mappers
{
    public class OrderDetailMapper
    {
		public static OrderDetailResponse MapOrderDetailResponseFromOrderDetailDTO(OrderDetailDTO request)
		{
			OrderDetailResponse result = new OrderDetailResponse
			{
				OrderNumber = request.OrderNumber,
				OrderLineNumber = request.OrderLineNumber,
				PriceEach = request.PriceEach,
				ProductCode = request.ProductCode,
				QuantityOrdered = request.QuantityOrdered
			};

			return result;
		}

		public static OrderDetailDTO MapToOrderDetailDTOFromCreateOrderDetailRequest(CreateOrderDetailRequest request)
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
	}
}

