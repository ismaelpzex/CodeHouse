using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.ProductLine;

namespace PrimeraApi.Application.Contracts.Services
{
	public interface IProducLineServices
	{
		public PaginatedResponse<ProductLineResponse> GetProductLinePaginated(ProductLineSearchRequest request);
		ProductLineResponse? GetProductLineByCode(string code);
		bool DeleteProductLine(string code);
		ProductLineResponse? CreateProductLine(CreateProductLineRequest request);
		ProductLineResponse? UpdateProductLine(string code, UpdateProductLineRequest request);
	}
}

