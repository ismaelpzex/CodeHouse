using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models.User
{
    public class LoginRequest
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}

