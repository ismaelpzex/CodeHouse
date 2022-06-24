using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
	public interface IProductRepository
	{
		PaginatedDTO<ProductDTO> GetProductsPaginated(string descripcion = "", int? page = 1, int? itemsPerPage = 5);
		ProductDTO? GetProductByCode(string productCode);
		void DeleteProduct(ProductDTO product);
		ProductDTO AddProduct(ProductDTO product);
		ProductDTO UpdateProduct(ProductDTO product);
	}
}

