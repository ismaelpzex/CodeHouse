using System;
namespace PrimeraApi.BusinessModels.Models
{
	public class PaginatedResponse<T>  where T : class
	{
		public List<T> Result { get; set; }
		public int Total { get; set; }
		public int Page { get; set; }
		public int ItemsPerPage { get; set; }

		public PaginatedResponse()
		{
			Result = new List<T>();
		}
	}
}

