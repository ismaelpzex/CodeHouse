using System;
using PrimeraApi.BusinessModels.Models;

namespace PrimeraApi.Application.Contracts.Services
{
	public interface IOfficeService
	{
		OfficeResponse? GetOfficeByCode(string code);
	}
}

