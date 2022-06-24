using System;
namespace PrimeraApi.BusinessModels.Models.OrderDetail
{
    public class OrderDetailResponse
    {
        public int OrderNumber { get; set; }
        public string ProductCode { get; set; } = null!;
        public int QuantityOrdered { get; set; }
        public decimal PriceEach { get; set; }
        public short OrderLineNumber { get; set; }
    }
}


