using PrimeraApi.BusinessModels.Models;

namespace PrimeraApi.Application.Contracts.Services
{
	public interface IProducLineServices
	{
		 ProductLineResponse? GetProductLineByCode(string code);
		 bool DeleteProductLine(string code);
		 ProductLineResponse? CreateProductLine(CreateProductLineRequest request);
		 ProductLineResponse? UpdateProductLine(string code, UpdateProductLineRequest request);
	}
}

