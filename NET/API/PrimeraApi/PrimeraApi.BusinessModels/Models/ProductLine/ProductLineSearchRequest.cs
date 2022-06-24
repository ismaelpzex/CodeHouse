using System;
using PrimeraApi.BusinessModels.Models.Product;

namespace PrimeraApi.BusinessModels.Models.ProductLine
{
	public class ProductLineSearchRequest : PaginatedBaseRequest
	{
		public string Description { get; set; }
	}
}

