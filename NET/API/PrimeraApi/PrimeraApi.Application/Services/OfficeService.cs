using System;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Mappers;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.DataAccess.Contracts;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.Application.Services
{
	public class OfficeService : IOfficeService
	{
		private IOfficeRepository _officeRepository;
		private IUnitOfWork _UoW;

		public OfficeService(IOfficeRepository officeRepository, IUnitOfWork UoW)
        {
			_officeRepository = officeRepository;
			_UoW = UoW;
        }

		public OfficeResponse? GetOfficeByCode(string code)
        {
			OfficeDTO? Office = _officeRepository.GetOfficeByCode(code);

			if (Office != null)
			{
				OfficeResponse result = OfficeMapper.MapOfficeResponseFromOfficeDTO(Office);
				return result;
			}
			else return null;
        }
	}
}

