using System;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Entities;

namespace PrimeraApi.DataAccess.Mappers
{
	public class ProductLineMapper
	{
		public static ProductLineDTO MapProductLineDTOfromProdcutLine(Productline request)
        {
			ProductLineDTO result = new ProductLineDTO
			{
				Code = request.ProductLine1,
				TextDescription = request.TextDescription,
				HtmlDescription = request.HtmlDescription,
				Image = request.Image,
			};

			return result;
		}
	}
}

