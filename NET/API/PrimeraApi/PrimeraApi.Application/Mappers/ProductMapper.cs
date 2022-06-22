using System;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.Application.Mappers
{
	public static class ProductMapper
	{
		
        public static ProductDTO MapToProductDTOFROMCreateProductRequest(CreateProductRequest request)
        {
            return new ProductDTO
            {
				BuyPrice = request.BuyPrice,
				Msrp = request.Price,
				ProductCode = request.Code,
				ProductName = request.Name,
				ProductDescription = request.Description,
				ProductLine = request.Line,
				ProductScale = request.Scale,
				ProductVendor = request.Vendor,
				QuantityInStock = request.Stock
			};
        }

		public static ProductResponse MapToProductResponseFromProductDTO(ProductDTO product)
        {
			return new ProductResponse
			{
				BuyPrice = product.BuyPrice,
				Price = product.Msrp,
				Code = product.ProductCode,
				Name = product.ProductName,
				Description = product.ProductDescription,
				Line = product.ProductLine,
				Scale = product.ProductScale,
				Vendor = product.ProductVendor,
				Stock = product.QuantityInStock
			};
		}
	}
}

