using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models.Order
{
    public class UpdateOrderRequest
    {
        [Required]
        public int OrderNumber { get; set; }
        [Required]
        public DateOnly OrderDate { get; set; }
        [Required]
        public DateOnly RequiredDate { get; set; }
        public DateOnly? ShippedDate { get; set; }
        [Required]
        [MaxLength(15)]
        public string Status { get; set; } = null!;
        public string? Comments { get; set; }
        [Required]
        public int CustomerNumber { get; set; }
    }
}

