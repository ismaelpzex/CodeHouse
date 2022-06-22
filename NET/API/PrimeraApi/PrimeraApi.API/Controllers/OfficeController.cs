using Microsoft.AspNetCore.Mvc;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.BusinessModels.Models;

namespace PrimeraApi.API.Controllers
{
	public class OfficeController : Controller
	{
		private IOfficeService _OfficeService;

		public OfficeController(IOfficeService officeService)
		{
			_OfficeService = officeService;
		}

		[HttpGet]
		[Route("api/[controller]")]
		[ProducesResponseType(typeof(OfficeResponse), StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult GetOfficeByCode(string code)
        {
			OfficeResponse? office = _OfficeService.GetOfficeByCode(code);

			if (office != null) return Ok(office);
			else return NoContent();
        }
	}
}

