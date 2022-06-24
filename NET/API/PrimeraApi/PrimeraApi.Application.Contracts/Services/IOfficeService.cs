using System;
using System.ComponentModel.DataAnnotations;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Office;

namespace PrimeraApi.Application.Contracts.Services
{
	public interface IOfficeService
	{
		PaginatedResponse<OfficeResponse> GetOfficePaginated(OfficeSearchRequest request);
		OfficeResponse? GetOfficeByCode(string code);
		bool DeleteOffice([Required] string officeCode);
		OfficeResponse? AddOficce(CreateOfficeRequest request);
		OfficeResponse? UpdateOffice([Required] string code, UpdateOfficeRequest request);
	}
}

