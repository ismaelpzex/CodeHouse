using System;
using PrimeraApi.BusinessModels.Models.Product;

namespace PrimeraApi.BusinessModels.Models.Order
{
    public class OrderSearchRequest : PaginatedBaseRequest
    {
        public string Status { get; set; }
    }
}

