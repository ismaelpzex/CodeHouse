using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models.OrderDetail
{
	public class CreateOrderDetailRequest
	{
        [Required]
        public int OrderNumber { get; set; }
        [MaxLength(15)]
        [Required]
        public string ProductCode { get; set; } = null!;
        [Required]
        public int QuantityOrdered { get; set; }
        [Required]
        public decimal PriceEach { get; set; }
        [Required]
        public short OrderLineNumber { get; set; }
    }
}

