using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.BusinessModels.Models.User;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.Application.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserResponse? ValidateUser (LoginRequest request)
        {
            UserDTO? user = _userRepository.ValidateUser(request.UserName, request.Password);

            if (user == null) return null;

            UserResponse result = new UserResponse
            {
                UserId = user.Id,
                UserName = user.UserName
            };

            string secret = "chorizoescritoamanoparasimularlaclaveprivada";

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);


            
           var tokenDescriptor = new SecurityTokenDescriptor
           {
               Subject = new ClaimsIdentity(new Claim[]
                   {
                        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                        new Claim(ClaimTypes.Name, user.UserName)
                   }),
               Expires = DateTime.UtcNow.AddDays(7),
               SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
           };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            result.Token = tokenHandler.WriteToken(token);

            return result;
        }
    }
}

