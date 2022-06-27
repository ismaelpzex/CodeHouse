using System;
using PrimeraApi.DataAccess.Contracts.Models;
using PrimeraApi.DataAccess.Contracts.Repositories;

namespace PrimeraApi.DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {

        public ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserDTO? ValidateUser(string userName, string password)
        {
            var query = from u in _context.Users
                        where u.UserName == userName
                        && u.Password == password
                        select new UserDTO
                        {
                            Id = u.Id,
                            UserName = userName
                        };

            return query.FirstOrDefault();
        }
    }
}

