using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Entities;
using PrimeraApi.DataAccess.Mappers;

namespace PrimeraApi.DataAccess.Repositories
{
	public class ProductRepository : IProductRepository
	{
		private ApplicationDbContext _context;

		public ProductRepository(ApplicationDbContext context)
        {
			_context = context;
        }


		public PaginatedDTO<ProductDTO> GetProductsPaginated(string descripcion = "", int? page = 1, int? itemsPerPage = 5)
        {
			PaginatedDTO<ProductDTO> result = new PaginatedDTO<ProductDTO>();

			var query = from p in _context.Products
						where (string.IsNullOrEmpty(descripcion) || p.ProductDescription.Contains(descripcion))
						select ProductMapper.MapProductDTOfromProduct(p);

			result.Total = query.Count();
			result.Page = page.Value;
			result.ItemsPerPage = itemsPerPage.Value;
			result.Result = query.Skip((page.Value - 1) * itemsPerPage.Value).Take(itemsPerPage.Value).ToList();

			return result;
        }

		public ProductDTO? GetProductByCode(string productCode)
        {
			var query = from p in _context.Products
						where p.ProductCode == productCode
						select ProductMapper.MapProductDTOfromProduct(p);

			return query.FirstOrDefault();
        }

		public void DeleteProduct(ProductDTO product)
        {

            Product productToDelete = ProductMapper.MapProductFromProductDTO(product);
            _context.Products.Remove(productToDelete);
		}

		public ProductDTO AddProduct(ProductDTO product)
        {

			Product newProduct = ProductMapper.MapProductFromProductDTO(product);

			var productInserted = _context.Products.Add(newProduct);

			ProductDTO result = ProductMapper.MapProductDTOfromProduct(productInserted.Entity);
			return result;
        }

		public ProductDTO UpdateProduct(ProductDTO product)
        {

			Product ProductToUpdate = ProductMapper.MapProductFromProductDTO(product);


			var productUpdated = _context.Products.Update(ProductToUpdate);


			ProductDTO result = ProductMapper.MapProductDTOfromProduct(productUpdated.Entity);

			return result;

		}
	}
}

