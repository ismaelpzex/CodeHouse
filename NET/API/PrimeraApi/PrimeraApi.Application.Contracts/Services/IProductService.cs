using PrimeraApi.BusinessModels.Models;

namespace PrimeraApi.Application.Contracts.Services
{
	public interface IProductService
	{
		public ProductResponse? GetProductByCode(string code);
		public bool DeleteProduct(string productCode);
		public ProductResponse? AddProduct(CreateProductRequest request);
		public ProductResponse? UpdateProduct(string code, UpdateProductRequest request);
	}
}

