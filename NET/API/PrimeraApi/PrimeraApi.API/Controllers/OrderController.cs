using Microsoft.AspNetCore.Mvc;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.Office;
using PrimeraApi.BusinessModels.Models.Order;

namespace PrimeraApi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        private IOrderService _OrderService;

        public OrderController(IOrderService orderService)
        {
            _OrderService = orderService;
        }

		[HttpPost]
		[Route("paginated")]
		[ProducesResponseType(typeof(PaginatedResponse<ProductResponse>), StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult GetOrderPaginated(OrderSearchRequest request)
		{
			var orders = _OrderService.GetOrderPaginated(request);
			return Ok(orders);
		}


		[HttpGet]
		[ProducesResponseType(typeof(OrderResponse), StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult GetOrderByCode(string code)
		{
			OrderResponse? order = _OrderService.GetOrderByCode(code);

			if (order != null) return Ok(order);
			else return NoContent();
		}


		[HttpDelete]
		[Route("{code}")]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult DeleteOrder(string code)
		{
			bool result = _OrderService.DeleteOrder(code);

			if (result) return NoContent();
			else return NotFound("Office dont exist");
		}

		[HttpPost]
		[ProducesResponseType(typeof(OfficeResponse), StatusCodes.Status200OK)]
		[ProducesResponseType(typeof(string), StatusCodes.Status409Conflict)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult AddOrder(CreateOrderRequest request)
		{
			OrderResponse? order = _OrderService.AddOrder(request);

			if (order != null) return Ok(order);
			else return Conflict("La oficina ya existe");
		}


		[HttpPut]
		[Route("{code}")]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult UpdateOrder(string code, UpdateOrderRequest request)
		{
			OrderResponse? order = _OrderService.UpdateOrder(code, request);

			if (order != null) return Ok(order);
			else return NotFound("La oficina no existe");
		}
	}
}

