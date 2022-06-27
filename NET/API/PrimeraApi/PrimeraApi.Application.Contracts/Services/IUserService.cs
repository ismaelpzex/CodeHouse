using System;
using PrimeraApi.BusinessModels.Models.User;

namespace PrimeraApi.Application.Contracts.Services
{
    public interface IUserService
    {
        UserResponse? ValidateUser(LoginRequest request);
    }
}

