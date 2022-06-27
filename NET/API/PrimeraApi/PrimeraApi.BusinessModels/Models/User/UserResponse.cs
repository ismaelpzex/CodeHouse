using System;
namespace PrimeraApi.BusinessModels.Models.User
{
    public class UserResponse
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
    }
}

