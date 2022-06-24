using Microsoft.AspNetCore.Mvc;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.BusinessModels.Models;
using PrimeraApi.BusinessModels.Models.ProductLine;

namespace PrimeraApi.API.Controllers
{
	// api/productline
	[Route("api/[controller]")]
	[ApiController]
	public class ProductLineController : Controller
	{
		private IProducLineServices _productLineServices;

		public ProductLineController(IProducLineServices productLineServices)
        {
			_productLineServices = productLineServices;
        }


		[HttpPost]
		[Route("paginated")]
		[ProducesResponseType(typeof(PaginatedResponse<ProductResponse>), StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult GetProducsLinePaginated(ProductLineSearchRequest request)
        {
			var productsLine = _productLineServices.GetProductLinePaginated(request);
			return Ok(productsLine);
        }


		// api/productline/{code}
		[HttpGet]
		[Route("{code}")]
		[ProducesResponseType(typeof(ProductLineResponse), StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult GetProductLineByCode(string code)
        {
			ProductLineResponse? productLine = _productLineServices.GetProductLineByCode(code);

			if (productLine != null)
            {
				return Ok(productLine);
            }
			else
            {
				return NoContent();
            }
        }
		// /api/products/{code}
		[HttpDelete]
		[Route("{code}")]
		[ProducesResponseType(StatusCodes.Status204NoContent)]
		[ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult DeleteProductLine(string code)
        {
			bool result = _productLineServices.DeleteProductLine(code);

			if (result) return NoContent();
			else return NotFound("Product Line no exist");
        }


		[HttpPost]
		[ProducesResponseType(typeof(ProductLineResponse), StatusCodes.Status200OK)]
		[ProducesResponseType(typeof(string), StatusCodes.Status409Conflict)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult CreateProductLine(CreateProductLineRequest request)
        {
			ProductLineResponse? product = _productLineServices.CreateProductLine(request);

			if (product != null)
            {
				return Ok(product);
            }
			else
            {
				return Conflict("El producto ya existe");
            }
        }

		[HttpPut]
		[Route("{code}")]
		[ProducesResponseType(StatusCodes.Status200OK)]
		[ProducesResponseType(typeof(string), StatusCodes.Status404NotFound)]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public IActionResult UpdateProductLine(string code, UpdateProductLineRequest request)
        {
			ProductLineResponse? productLine = _productLineServices.UpdateProductLine(code, request);

			if (productLine != null) return Ok(productLine);
			else return NotFound("El producto no existe");
        }
	}
}

