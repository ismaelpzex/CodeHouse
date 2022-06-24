using System.ComponentModel.DataAnnotations;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Mappers;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Product;
using PrimeraApi.DataAccess.Contracts;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.Application.Services
{
	public class ProductService : IProductService
	{
		private IProductRepository _ProductRepository;
		private IUnitOfWork _uOw;


		public ProductService(IProductRepository productRepository, IUnitOfWork uOw)
        {
			_ProductRepository = productRepository;
			_uOw = uOw;
        }


		public PaginatedResponse<ProductResponse> GetProductsPaginated(ProductSearchRequest request)
        {
			PaginatedResponse<ProductResponse> result = new PaginatedResponse<ProductResponse>();

			PaginatedDTO<ProductDTO> search = _ProductRepository.GetProductsPaginated(request.Description, request.Page, request.ItemsPerPage);

			result.Result = ProductMapper.MapToProductResponseListToProductDTOList(search.Result);
			result.Total = search.Total;
			result.Page = search.Page;
			result.ItemsPerPage = search.ItemsPerPage;

			return result;
		}

		public ProductResponse? GetProductByCode([Required]string code)
        {
			ProductDTO? product = _ProductRepository.GetProductByCode(code);

			if (product != null)
			{
				ProductResponse result = ProductMapper.MapToProductResponseFromProductDTO(product);

				return result;
			}
			else return null;
        }

		//TODO IPE: Completar la validacion de si tiene pedidos creados ese producto antes de borrar. En caso afirmativo, cancelar la operación. 

		public bool DeleteProduct([Required] string productCode)
        {
			ProductDTO? product = _ProductRepository.GetProductByCode(productCode);

			if (product != null)
            {
				_ProductRepository.DeleteProduct(product);
				_uOw.Commit();
				return true;
            }
			return false;
        }

		public ProductResponse? AddProduct(CreateProductRequest request)
        {

			ProductDTO? existingProduct = _ProductRepository.GetProductByCode(request.Code);

			if (existingProduct == null)
			{
				ProductDTO producToInsert = ProductMapper.MapToProductDTOFROMCreateProductRequest(request);
				ProductDTO productInserted = _ProductRepository.AddProduct(producToInsert);

				_uOw.Commit();

				ProductResponse result = ProductMapper.MapToProductResponseFromProductDTO(productInserted);
				return result;
			}
			else return null; 

        }

		public ProductResponse? UpdateProduct([Required] string code, UpdateProductRequest request)
		{
			ProductDTO? existingProduct = _ProductRepository.GetProductByCode(code);

			if (existingProduct != null)
			{
				existingProduct.ProductDescription = request.Description;
				existingProduct.BuyPrice = request.BuyPrice;
				existingProduct.Msrp = request.Price;
				existingProduct.ProductLine = request.Line;
				existingProduct.ProductName = request.Name;
				existingProduct.ProductScale = request.Scale;
				existingProduct.ProductVendor = request.Vendor;
				existingProduct.QuantityInStock = request.Stock;

			

				ProductDTO productUpdated = _ProductRepository.UpdateProduct(existingProduct);

				_uOw.Commit();

				ProductResponse result = ProductMapper.MapToProductResponseFromProductDTO(productUpdated);
				return result;
			}
			else return null;

		}
	}
}

