using System;
using PrimeraApi.BusinessModels.Models.Product;

namespace PrimeraApi.BusinessModels.Models.Office
{
    public class OfficeSearchRequest : PaginatedBaseRequest
    {
        public string Address { get; set; }
    }
}

