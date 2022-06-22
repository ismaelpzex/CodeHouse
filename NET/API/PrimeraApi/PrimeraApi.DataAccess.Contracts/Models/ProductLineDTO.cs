using System;
namespace PrimeraApi.DataAccess.Contracts.Models
{
	public class ProductLineDTO
	{
		public string Code { get; set; } = null!;
		public string? TextDescription { get; set; }
		public string? HtmlDescription { get; set; }
		public byte[]? Image { get; set; }
	}
}

