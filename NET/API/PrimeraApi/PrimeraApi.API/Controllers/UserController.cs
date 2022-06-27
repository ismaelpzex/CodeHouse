using System;
using Microsoft.AspNetCore.Mvc;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.BusinessModels.Models.User;

namespace PrimeraApi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost]
        [Route("login")]
        [ProducesResponseType(typeof(UserResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Login(LoginRequest request)
        {
            UserResponse? user = _userService.ValidateUser(request);

            if (user != null) return Ok(user);
            else return NoContent();
        }
    }
}

