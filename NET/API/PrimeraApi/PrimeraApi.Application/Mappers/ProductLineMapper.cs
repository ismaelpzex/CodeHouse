using System;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.Application.Mappers
{
	public class ProductLineMapper
	{
		public static ProductLineResponse MapToProductLineResponseFromProductLineDTO(ProductLineDTO request)
        {
			ProductLineResponse result = new ProductLineResponse
			{
				Code = request.Code,
				HtmlDescription = request.HtmlDescription,
				Image = request.Image,
				TextDescription = request.TextDescription,
			};

			return result;
        }

		public static ProductLineDTO MapToProductLineDTOFromCreateProductLineRequest(CreateProductLineRequest request)
        {
			ProductLineDTO result = new ProductLineDTO
			{
				Code = request.Code,
				HtmlDescription = request.HtmlDescription,
				Image = request.Image,
				TextDescription = request.TextDescription,
			};

			return result;
        }

		public static List<ProductLineResponse> MapToProductLineResponseListFromProductLineDTOList(List<ProductLineDTO> productLines)
        {
			return productLines.Select(pl => MapToProductLineResponseFromProductLineDTO(pl)).ToList();
        }

		
	}
}

