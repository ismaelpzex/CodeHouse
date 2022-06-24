using System;
using Microsoft.AspNetCore.Mvc;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.BusinessModels.Models.OrderDetail;

namespace PrimeraApi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailController : Controller
    {

        private IOrderDetailService _OrderDetailService;

        public OrderDetailController(IOrderDetailService orderDetailService)
        {
            _OrderDetailService = orderDetailService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(OrderDetailResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult GetOrderByCode(int code)
        {
            OrderDetailResponse? order = _OrderDetailService.GetOrderDetailByCode(code);

            if (order != null) return Ok(order);
            else return NoContent();
        }
    }
}

