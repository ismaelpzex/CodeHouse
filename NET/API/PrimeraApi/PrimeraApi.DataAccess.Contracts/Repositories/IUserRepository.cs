using System;
using PrimeraApi.DataAccess.Contracts.Models;

namespace PrimeraApi.DataAccess.Contracts.Repositories
{
    public interface IUserRepository
    {
        UserDTO? ValidateUser(string userName, string password);
    }
}

