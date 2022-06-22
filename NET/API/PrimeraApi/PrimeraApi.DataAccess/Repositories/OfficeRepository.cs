

using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.DataAccess.Repositories
{
	public class OfficeRepository : IOfficeRepository
	{
		private ApplicationDbContext _context;

		public OfficeRepository(ApplicationDbContext context)
		{
			_context = context;
		}

		public OfficeDTO? GetOfficeByCode(string code)
        {
			var query = from o in _context.Offices
						where o.OfficeCode == code
						select new OfficeDTO
						{
							OfficeCode = o.OfficeCode,
							AddressLine1 = o.AddressLine1,
							AddressLine2 = o.AddressLine2,
							City = o.City,
							Country = o.Country,
							Phone = o.Phone,
							PostalCode = o.PostalCode,
							State = o.State,
							Territory = o.Territory
						};

			return query.FirstOrDefault();
        }
	}
}

