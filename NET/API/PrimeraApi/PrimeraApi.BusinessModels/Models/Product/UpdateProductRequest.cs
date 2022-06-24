using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models
{
	public class UpdateProductRequest
	{
        [Required]
        [MaxLength(70)]
        public string Name { get; set; } = null!;
        [Required]
        [MaxLength(50)]
        public string Line { get; set; } = null!;
        [Required]
        [MaxLength(10)]
        public string Scale { get; set; } = null!;
        [Required]
        [MaxLength(50)]
        public string Vendor { get; set; } = null!;
        [Required]
        public string Description { get; set; } = null!;
        [Required]
        public short Stock { get; set; }
        [Required]
        public decimal BuyPrice { get; set; }
        [Required]
        public decimal Price { get; set; }
    }
}

