
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
	public interface IProductLineRepository
	{
		PaginatedDTO<ProductLineDTO> GetProductsLinePaginated(string desc = "", int? page = 1, int? itemsPerPage = 5);
		ProductLineDTO? GetProducLineByCode(string code);
		void DeleteProductLine(ProductLineDTO productLine);
		ProductLineDTO AddProductLine(ProductLineDTO productLine);
		ProductLineDTO UpdateProductLine(ProductLineDTO productLine);
	}
}

