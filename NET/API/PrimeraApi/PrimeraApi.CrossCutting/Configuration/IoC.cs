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
			services.AddTransient<IProductLineRepository, ProductLineRepository>();
			services.AddTransient<IProducLineServices, ProductLineServices>();
			services.AddTransient<IOfficeRepository, OfficeRepository>();
			services.AddTransient<IOfficeService, OfficeService>();
			services.AddTransient<IOrdersRepository, OrdersRepository>();
			services.AddTransient<IOrderService, OrderService>();
			services.AddTransient<IOrderDetailRepository, OrderDetailRepository>();
			services.AddTransient<IOrderDetailService, OrderDetailService>();
			services.AddTransient<IUserRepository, UserRepository>();
			services.AddTransient<IUserService, UserService>();

			return services;
		}
	}
}

