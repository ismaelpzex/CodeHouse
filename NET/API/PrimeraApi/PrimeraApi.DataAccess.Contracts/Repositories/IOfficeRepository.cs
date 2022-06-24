using System;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
	public interface IOfficeRepository
	{
		PaginatedDTO<OfficeDTO> GetOfficePaginated(string address = "", int? page = 1, int? itemsPerPage = 5);
		OfficeDTO? GetOfficeByCode(string code);
		void DeleteOffice(OfficeDTO office);
		OfficeDTO AddOffice(OfficeDTO office);
		OfficeDTO UpdateOffice(OfficeDTO office);
	}
}

