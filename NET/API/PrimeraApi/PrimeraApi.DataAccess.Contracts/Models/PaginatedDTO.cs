using System;
namespace PrimeraApi.DataAccess.Contracts.Models
{
	public class PaginatedDTO<T> where T : class
	{
		public List<T> Result { get; set; }
		public int Total { get; set; }
		public int Page { get; set; }
		public int ItemsPerPage { get; set; }

		public PaginatedDTO()
        {
			Result = new List<T>();
        }
	}
}

