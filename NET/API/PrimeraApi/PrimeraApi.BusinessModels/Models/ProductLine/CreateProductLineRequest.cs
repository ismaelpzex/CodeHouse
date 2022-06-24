using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models
{
	public class CreateProductLineRequest
	{
		[Required]
		[MaxLength(50)]
		public string Code { get; set; } = null!;
		[MaxLength(4000)]
		public string? TextDescription { get; set; }
		public string? HtmlDescription { get; set; }
		public byte[]? Image { get; set; }
	}
}

