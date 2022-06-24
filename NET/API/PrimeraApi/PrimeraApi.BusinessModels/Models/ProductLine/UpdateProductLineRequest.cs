using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models
{
	public class UpdateProductLineRequest
	{
		[MaxLength(4000)]
		public string? TextDescription { get; set; }
		public string? HtmlDescription { get; set; }
		public byte[]? Image { get; set; }
	}
}

