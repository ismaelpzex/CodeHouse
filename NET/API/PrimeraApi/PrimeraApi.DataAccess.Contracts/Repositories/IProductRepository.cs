using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
	public interface IProductRepository
	{
		public ProductDTO? GetProductByCode(string productCode);
		public void DeleteProduct(ProductDTO product);
		public ProductDTO AddProduct(ProductDTO product);
		public ProductDTO UpdateProduct(ProductDTO product);
	}
}

