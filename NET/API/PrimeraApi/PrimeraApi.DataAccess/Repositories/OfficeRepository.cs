

using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Entities;
using PrimeraApi.DataAccess.Mappers;

namespace PrimeraApi.DataAccess.Repositories
{
	public class OfficeRepository : IOfficeRepository
	{
		private ApplicationDbContext _context;

		public OfficeRepository(ApplicationDbContext context)
		{
			_context = context;
		}

		public PaginatedDTO<OfficeDTO> GetOfficePaginated(string address = "", int? page = 1, int? itemsPerPage = 5)
        {
			PaginatedDTO<OfficeDTO> result = new PaginatedDTO<OfficeDTO>();

			var query = from o in _context.Offices
						where (string.IsNullOrEmpty(address) || o.AddressLine1.Contains(address))
						select OfficeMapper.MapOfficeDTOFromOffice(o);

			result.Total = query.Count();
			result.Page = page.Value;
			result.ItemsPerPage = itemsPerPage.Value;
			result.Result = query.Skip((page.Value - 1) * itemsPerPage.Value).Take(itemsPerPage.Value).ToList();

			return result;
		}

		public OfficeDTO? GetOfficeByCode(string code)
		{
			var query = from o in _context.Offices
						where o.OfficeCode == code
						select OfficeMapper.MapOfficeDTOFromOffice(o);

			return query.FirstOrDefault();
		}

		public void DeleteOffice(OfficeDTO office)
        {
			Office OfficeToDelete = OfficeMapper.MapOfficeFromOfficeDTO(office);
			_context.Offices.Remove(OfficeToDelete);
        }

		public OfficeDTO AddOffice(OfficeDTO office)
        {
			Office newOffice = OfficeMapper.MapOfficeFromOfficeDTO(office);

			var officeInserted = _context.Offices.Add(newOffice);

			OfficeDTO result = OfficeMapper.MapOfficeDTOFromOffice(officeInserted.Entity);
			return result;
        }

		public OfficeDTO UpdateOffice(OfficeDTO office)
        {
			Office officeToUpdate = OfficeMapper.MapOfficeFromOfficeDTO(office);

			var officeUpdated = _context.Offices.Update(officeToUpdate);

			OfficeDTO result = OfficeMapper.MapOfficeDTOFromOffice(officeUpdated.Entity);

			return result;
        }
	}
}

