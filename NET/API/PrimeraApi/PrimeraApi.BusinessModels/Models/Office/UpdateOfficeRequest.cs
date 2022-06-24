using System;
using System.ComponentModel.DataAnnotations;

namespace PrimeraApi.BusinessModels.Models.Office
{
	public class UpdateOfficeRequest
	{
        [Required]
        [MaxLength(50)]
        public string City { get; set; } = null!;
        [Required]
        [MaxLength(50)]
        public string Phone { get; set; } = null!;
        [Required]
        [MaxLength(50)]
        public string AddressLine1 { get; set; } = null!;
        [MaxLength(50)]
        public string? AddressLine2 { get; set; }
        [MaxLength(50)]
        public string? State { get; set; }
        [Required]
        [MaxLength(50)]
        public string Country { get; set; } = null!;
        [Required]
        [MaxLength(15)]
        public string PostalCode { get; set; } = null!;
        [Required]
        [MaxLength(10)]
        public string Territory { get; set; } = null!;
    }
}

