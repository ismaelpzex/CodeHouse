using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Mappers;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.ProductLine;
using PrimeraApi.DataAccess.Contracts;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.Application.Services
{
	public class ProductLineServices : IProducLineServices
	{
		private IProductLineRepository _productLineRespository;
		private IUnitOfWork _UoW;
		public ProductLineServices(IProductLineRepository productLineRepository, IUnitOfWork UoW)
		{
			_productLineRespository = productLineRepository;
			_UoW = UoW;
		}



		public PaginatedResponse<ProductLineResponse> GetProductLinePaginated(ProductLineSearchRequest request)
        {
			PaginatedResponse<ProductLineResponse> result = new PaginatedResponse<ProductLineResponse>();

			PaginatedDTO<ProductLineDTO> search = _productLineRespository.GetProductsLinePaginated(request.Description, request.Page, request.ItemsPerPage);

			result.Result = ProductLineMapper.MapToProductLineResponseListFromProductLineDTOList(search.Result);
			result.Total = search.Total;
			result.Page = search.Page;
			result.ItemsPerPage = search.ItemsPerPage;

			return result;
		}

		public ProductLineResponse? GetProductLineByCode(string code)
        {
			ProductLineDTO? productLine = _productLineRespository.GetProducLineByCode(code);

			if (productLine != null)
			{
				ProductLineResponse result = ProductLineMapper.MapToProductLineResponseFromProductLineDTO(productLine);
				return result;
			}
			else return null;
        }

		//TODO IPE: Completar la validación de las FK

		public bool DeleteProductLine(string code)
        {
			ProductLineDTO? productLine = _productLineRespository.GetProducLineByCode(code);

			if (productLine != null)
			{
				_productLineRespository.DeleteProductLine(productLine);
				_UoW.Commit();
				return true;
			}
			else return false;
        }

		public ProductLineResponse? CreateProductLine(CreateProductLineRequest request)
        {
			ProductLineDTO? existingProductLine = _productLineRespository.GetProducLineByCode(request.Code);

			if (existingProductLine == null)
			{
				var productLineToInsert = ProductLineMapper.MapToProductLineDTOFromCreateProductLineRequest(request);

				ProductLineDTO productLineInserted = _productLineRespository.AddProductLine(productLineToInsert);
				_UoW.Commit();

				var result = ProductLineMapper.MapToProductLineResponseFromProductLineDTO(productLineInserted);
				return result;
			}
			else return null;
        }


		public ProductLineResponse? UpdateProductLine(string code, UpdateProductLineRequest request)
		{
			ProductLineDTO? ProductLineToUpdate = _productLineRespository.GetProducLineByCode(code);

			if (ProductLineToUpdate != null)
			{
				ProductLineToUpdate.Code = code;
				ProductLineToUpdate.TextDescription = request.TextDescription;
				ProductLineToUpdate.Image = request.Image;
				ProductLineToUpdate.HtmlDescription = request.HtmlDescription;
				ProductLineDTO productoUpdated = _productLineRespository.UpdateProductLine(ProductLineToUpdate);
				_UoW.Commit();
				var result = ProductLineMapper.MapToProductLineResponseFromProductLineDTO(productoUpdated);
				return result;
			}
			else return null;
		}
	}
}

