using System;
namespace PrimeraApi.DataAccess.Entities
{
    public class Users
    {
        public int Id { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}

