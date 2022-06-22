
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Entities;

namespace PrimeraApi.DataAccess.Mappers
{
	public class ProductMapper
	{
		public static ProductDTO? MapProductDTOfromProduct(Product? request)
        {

			if (request != null)
			{
				ProductDTO result = new ProductDTO
				{
					BuyPrice = request.BuyPrice,
					Msrp = request.Msrp,
					ProductCode = request.ProductCode,
					ProductDescription = request.ProductDescription,
					ProductLine = request.ProductLine,
					ProductName = request.ProductName,
					ProductScale = request.ProductScale,
					ProductVendor = request.ProductVendor,
					QuantityInStock = request.QuantityInStock,
				};
				return result;
			}
			else return null;
        }

		public static Product MapProductFromProductDTO(ProductDTO request)
        {
			Product result = new Product
			{
				BuyPrice = request.BuyPrice,
				Msrp = request.Msrp,
				ProductCode = request.ProductCode,
				ProductName = request.ProductName,
				ProductDescription = request.ProductDescription,
				ProductLine = request.ProductLine,
				ProductScale = request.ProductScale,
				ProductVendor = request.ProductVendor,
				QuantityInStock = request.QuantityInStock,

			};

			return result;
        }
	}
}

