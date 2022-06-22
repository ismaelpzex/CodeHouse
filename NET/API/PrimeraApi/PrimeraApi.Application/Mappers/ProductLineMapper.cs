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

		public static ProductLineDTO MapToCreateProductRequestFromProductLineDTO(CreateProductLineRequest request)
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

		
	}
}

