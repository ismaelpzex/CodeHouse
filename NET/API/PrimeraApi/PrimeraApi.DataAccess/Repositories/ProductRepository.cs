using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Entities;

namespace PrimeraApi.DataAccess.Repositories
{
	public class ProductRepository : IProductRepository
	{
		private ApplicationDbContext _context;

		public ProductRepository(ApplicationDbContext context)
        {
			_context = context;
        }

		public ProductDTO? GetProductByCode(string productCode)
        {
			var query = from p in _context.Products
						where p.ProductCode == productCode
						select new ProductDTO
						{
							BuyPrice = p.BuyPrice,
							Msrp = p.Msrp,
							ProductCode = p.ProductCode,
							ProductName = p.ProductName,
							ProductDescription = p.ProductDescription,
							ProductLine = p.ProductLine,
							ProductScale = p.ProductScale,
							ProductVendor = p.ProductVendor,
							QuantityInStock = p.QuantityInStock,
						};

			return query.FirstOrDefault();
        }

		public void DeleteProduct(ProductDTO product)
        {
			Product productToDelete = new Product
			{
				BuyPrice = product.BuyPrice,
				Msrp = product.Msrp,
				ProductCode = product.ProductCode,
				ProductName = product.ProductName,
				ProductDescription = product.ProductDescription,
				ProductLine = product.ProductLine,
				ProductScale = product.ProductScale,
				ProductVendor = product.ProductVendor,
				QuantityInStock = product.QuantityInStock,
			};
			_context.Products.Remove(productToDelete);
		}

		public ProductDTO AddProduct(ProductDTO product)
        {
			Product newProduct = new Product
			{
				BuyPrice = product.BuyPrice,
				Msrp = product.Msrp,
				ProductCode = product.ProductCode,
				ProductName = product.ProductName,
				ProductDescription = product.ProductDescription,
				ProductLine = product.ProductLine,
				ProductScale = product.ProductScale,
				ProductVendor = product.ProductVendor,
				QuantityInStock = product.QuantityInStock,
			};

			var productInserted = _context.Products.Add(newProduct);

			ProductDTO result = new ProductDTO
			{
				BuyPrice = productInserted.Entity.BuyPrice,
				Msrp = productInserted.Entity.Msrp,
				ProductCode = productInserted.Entity.ProductCode,
				ProductName = productInserted.Entity.ProductName,
				ProductDescription = productInserted.Entity.ProductDescription,
				ProductLine = productInserted.Entity.ProductLine,
				ProductScale = productInserted.Entity.ProductScale,
				ProductVendor = productInserted.Entity.ProductVendor,
				QuantityInStock = productInserted.Entity.QuantityInStock,
			};

			return result;
        }

		public ProductDTO UpdateProduct(ProductDTO product)
        {
			Product ProductToUpdate = new Product
			{
				BuyPrice = product.BuyPrice,
				Msrp = product.Msrp,
				ProductCode = product.ProductCode,
				ProductName = product.ProductName,
				ProductDescription = product.ProductDescription,
				ProductLine = product.ProductLine,
				ProductScale = product.ProductScale,
				ProductVendor = product.ProductVendor,
				QuantityInStock = product.QuantityInStock,
			};
			
			var productUpdated = _context.Products.Update(ProductToUpdate);


			ProductDTO result = new ProductDTO
			{
				BuyPrice = productUpdated.Entity.BuyPrice,
				Msrp = productUpdated.Entity.Msrp,
				ProductCode = productUpdated.Entity.ProductCode,
				ProductName = productUpdated.Entity.ProductName,
				ProductDescription = productUpdated.Entity.ProductDescription,
				ProductLine = productUpdated.Entity.ProductLine,
				ProductScale = productUpdated.Entity.ProductScale,
				ProductVendor = productUpdated.Entity.ProductVendor,
				QuantityInStock = productUpdated.Entity.QuantityInStock,
			};

			return result;

		}
	}
}

