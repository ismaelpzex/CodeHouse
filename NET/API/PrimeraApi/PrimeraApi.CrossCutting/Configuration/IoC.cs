using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PrimeraApi.Application.Contracts.Services;
using PrimeraApi.Application.Services;
using PrimeraApi.DataAccess;
using PrimeraApi.DataAccess.Contracts;
using PrimeraApi.DataAccess.Contracts.Repositories;
using PrimeraApi.DataAccess.Repositories;

namespace PrimeraApi.CrossCutting.Configuration
{
	public static class IoC
	{
		public static IServiceCollection Register(this IServiceCollection services, IConfiguration configuration)
		{

			services.AddTransient<IUnitOfWork, UnitOfWork>();
			services.AddTransient<IProductService, ProductService>();
			services.AddTransient<IProductRepository, ProductRepository>();
			services.AddTransient<IProducLineServices, ProductLineServices>();
			services.AddTransient<IProductLineRepository, ProductLineRepository>();
			services.AddTransient<IOfficeRepository, OfficeRepository>();
			services.AddTransient<IOfficeService, OfficeService>();

			return services;
		}
	}
}

