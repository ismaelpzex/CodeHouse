
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Entities;

namespace PrimeraApi.DataAccess.Repositories
{
	public class ProductLineRepository : IProductLineRepository
	{
		private ApplicationDbContext _context;

		public ProductLineRepository(ApplicationDbContext context)
        {
			_context = context;
        }

		public ProductLineDTO? GetProducLineByCode(string code)
        {
			var query = from pl in _context.Productlines
						where pl.ProductLine1 == code
						select new ProductLineDTO
						{
							Code = pl.ProductLine1,
							HtmlDescription = pl.HtmlDescription,
							Image = pl.Image,
							TextDescription = pl.TextDescription
						};

			return query.FirstOrDefault();
        }

		public void DeleteProductLine(ProductLineDTO productLine)
        {
			Productline ProductLineForDelete = new Productline
			{
				ProductLine1 = productLine.Code,
				HtmlDescription = productLine.HtmlDescription,
				Image = productLine.Image,
				TextDescription = productLine.TextDescription,
			};

				_context.Productlines.Remove(ProductLineForDelete);
        }

		public ProductLineDTO AddProductLine(ProductLineDTO productLine)
        {
			Productline newProductLine = new Productline
			{
				ProductLine1 = productLine.Code,
				HtmlDescription = productLine.HtmlDescription,
				Image = productLine.Image,
				TextDescription = productLine.TextDescription,
			};

			var productInserted = _context.Productlines.Add(newProductLine);

			ProductLineDTO result = new ProductLineDTO
			{
				Code = productInserted.Entity.ProductLine1,
				HtmlDescription = productInserted.Entity.HtmlDescription,
				Image = productInserted.Entity.Image,
				TextDescription = productInserted.Entity.TextDescription,

			};

			return result;
        }

		public ProductLineDTO UpdateProductLine(ProductLineDTO productLine)
        {

			Productline productLineToUpdate = new Productline
			{
				ProductLine1 = productLine.Code,
				HtmlDescription = productLine.HtmlDescription,
				Image = productLine.Image,
				TextDescription = productLine.TextDescription,
			};


			var productLineUpdated = _context.Productlines.Update(productLineToUpdate);

			ProductLineDTO result = new ProductLineDTO
			{
				Code = productLineUpdated.Entity.ProductLine1,
				HtmlDescription = productLineUpdated.Entity.HtmlDescription,
				Image = productLineUpdated.Entity.Image,
				TextDescription = productLineUpdated.Entity.TextDescription,
			};

			return result;
		}
	}
}

