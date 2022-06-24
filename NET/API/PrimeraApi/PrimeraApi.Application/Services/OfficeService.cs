using System;
using System.ComponentModel.DataAnnotations;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Mappers;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Office;
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

		public PaginatedResponse<OfficeResponse> GetOfficePaginated(OfficeSearchRequest request)
        {
			PaginatedResponse<OfficeResponse> result = new PaginatedResponse<OfficeResponse>();
			PaginatedDTO<OfficeDTO> search = _officeRepository.GetOfficePaginated(request.Address, request.Page, request.ItemsPerPage);

			result.Result = OfficeMapper.MapToOfficeResponseListFromOfficeDTOList(search.Result);
			result.Total = search.Total;
			result.Page = search.Page;
			result.ItemsPerPage = search.ItemsPerPage;

			return result;
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

		public bool DeleteOffice([Required]string officeCode)
        {
			OfficeDTO? office = _officeRepository.GetOfficeByCode(officeCode);

			if (office != null)
            {
				_officeRepository.DeleteOffice(office);
				_UoW.Commit();
				return true;
            }
			return false;
        }

		public OfficeResponse? AddOficce(CreateOfficeRequest request)
        {
			OfficeDTO? existingOffice = _officeRepository.GetOfficeByCode(request.OfficeCode);

			if (existingOffice == null)
			{
				OfficeDTO officeToInsert = OfficeMapper.MapToOfficeDTOFromCreateOfficeRequest(request);
				OfficeDTO OfficeInserted = _officeRepository.AddOffice(officeToInsert);
				_UoW.Commit();
				OfficeResponse result = OfficeMapper.MapOfficeResponseFromOfficeDTO(OfficeInserted);
				return result;
			}
			else return null;
        }

		public OfficeResponse? UpdateOffice([Required]string code, UpdateOfficeRequest request)
        {
			OfficeDTO? existingOffice = _officeRepository.GetOfficeByCode(code);

			if (existingOffice != null)
			{
				existingOffice.AddressLine1 = request.AddressLine1;
				existingOffice.AddressLine2 = request.AddressLine2;
				existingOffice.City = request.City;
				existingOffice.Country = request.Country;
				existingOffice.Phone = request.Phone;
				existingOffice.PostalCode = request.PostalCode;
				existingOffice.State = request.State;
				existingOffice.Territory = request.Territory;

				OfficeDTO officeUpdated = _officeRepository.UpdateOffice(existingOffice);
				_UoW.Commit();

				OfficeResponse result = OfficeMapper.MapOfficeResponseFromOfficeDTO(officeUpdated);
				return result;
			}
			else return null;
        }
	}
}

