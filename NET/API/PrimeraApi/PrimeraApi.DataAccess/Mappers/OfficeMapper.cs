using System;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Entities;

namespace PrimeraApi.DataAccess.Mappers
{
	public static class OfficeMapper
	{
		public static OfficeDTO MapOfficeDTOFromOffice(Office request)
        {
			OfficeDTO result = new OfficeDTO
			{
				OfficeCode = request.OfficeCode,
				AddressLine1 = request.AddressLine1,
				AddressLine2 = request.AddressLine2,
				City = request.City,
				Country = request.Country,
				Phone = request.Phone,
				PostalCode = request.PostalCode,
				State = request.State,
				Territory = request.Territory,
			};

			return result;

		}

		public static Office MapOfficeFromOfficeDTO(OfficeDTO request)
        {
			Office result = new Office
			{
				OfficeCode = request.OfficeCode,
				AddressLine1 = request.AddressLine1,
				AddressLine2 = request.AddressLine2,
				City = request.City,
				Country = request.Country,
				Phone = request.Country,
				PostalCode = request.PostalCode,
				State = request.State,
				Territory = request.Territory,
			};

			return result;
        }
	}
}

