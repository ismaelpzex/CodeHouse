using System;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
	public interface IOfficeRepository
	{
		OfficeDTO? GetOfficeByCode(string code);
	}
}

