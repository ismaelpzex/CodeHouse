using System;
using System.ComponentModel;

namespace PrimeraApi.BusinessModels.Models.Product
{
	public class PaginatedBaseRequest
	{
		public int? Page { get; set; } = 1;
		public int? ItemsPerPage { get; set; } = 5;
	}
}

