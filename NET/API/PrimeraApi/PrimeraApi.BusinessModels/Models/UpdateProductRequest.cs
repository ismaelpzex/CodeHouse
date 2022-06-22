using System;
namespace PrimeraApi.BusinessModels.Models
{
	public class UpdateProductRequest
	{
        public string Name { get; set; } = null!;
        public string Line { get; set; } = null!;
        public string Scale { get; set; } = null!;
        public string Vendor { get; set; } = null!;
        public string Description { get; set; } = null!;
        public short Stock { get; set; }
        public decimal BuyPrice { get; set; }
        public decimal Price { get; set; }
    }
}

