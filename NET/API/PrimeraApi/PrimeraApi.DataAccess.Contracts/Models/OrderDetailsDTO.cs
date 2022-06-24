using System;
namespace PrimeraApi.DataAccess.Contracts.Models
{
    public class OrderDetailDTO
    {
        public int OrderNumber { get; set; }
        public string ProductCode { get; set; } = null!;
        public int QuantityOrdered { get; set; }
        public decimal PriceEach { get; set; }
        public short OrderLineNumber { get; set; }
    }
}

