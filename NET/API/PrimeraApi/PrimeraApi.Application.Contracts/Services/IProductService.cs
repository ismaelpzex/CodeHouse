using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Product;

namespace PrimeraApi.Application.Contracts.Services
{
	public interface IProductService
	{
		public PaginatedResponse<ProductResponse> GetProductsPaginated(ProductSearchRequest request);
		public ProductResponse? GetProductByCode(string code);
		public bool DeleteProduct(string productCode);
		public ProductResponse? AddProduct(CreateProductRequest request);
		public ProductResponse? UpdateProduct(string code, UpdateProductRequest request);
	}
}

