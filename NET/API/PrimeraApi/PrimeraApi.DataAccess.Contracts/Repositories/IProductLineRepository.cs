
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
	public interface IProductLineRepository
	{
		 ProductLineDTO? GetProducLineByCode(string code);
		 void DeleteProductLine(ProductLineDTO productLine);
		 ProductLineDTO AddProductLine(ProductLineDTO productLine);
		 ProductLineDTO UpdateProductLine(ProductLineDTO productLine);
	}
}

