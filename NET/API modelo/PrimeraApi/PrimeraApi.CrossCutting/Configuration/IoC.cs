using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PrimeraApi.DataAccess;
using PrimeraApi.DataAccess.Contracts;

namespace PrimeraApi.CrossCutting.Configuration
{
	public static class IoC
	{
		public static IServiceCollection Register(this IServiceCollection services, IConfiguration configuration)
		{

			services.AddTransient<IUnitOfWork, UnitOfWork>();

			return services;
		}
	}
}

