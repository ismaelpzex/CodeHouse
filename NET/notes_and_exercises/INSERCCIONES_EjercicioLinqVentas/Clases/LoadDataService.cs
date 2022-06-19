using _27_EjercicioLinqVentas.Entidades;
using _27_EjercicioLinqVentas.Interfaces;

namespace _27_EjercicioLinqVentas.Clases
{
    public class LoadDataService : ILoadDataService
    {
        public List<TipoProducto> ObtenerTiposProductos()
        {
            return new List<TipoProducto>
            {
                new TipoProducto
                {
                    Id = 1,
                    Descripcion = "Textil"
                },
                new TipoProducto
                {
                    Id = 2,
                    Descripcion = "Comestible"
                },
                new TipoProducto
                {
                    Id = 3,
                    Descripcion = "Repuestos"
                }
            };
        }

        public List<Producto> ObtenerProductos()
        {
            return new List<Producto>
            {
                new Producto
                {
                    Id = 1,
                    TipoProductoId = 1,
                    Descripcion = "Mallot",
                    PrecioUnitario = 65.25
                },
                new Producto
                {
                    Id = 2,
                    TipoProductoId = 1,
                    Descripcion = "Cullote",
                    PrecioUnitario = 105.89
                },
                new Producto
                {
                    Id = 3,
                    TipoProductoId = 2,
                    Descripcion = "Barrita Energetica",
                    PrecioUnitario = 2.78
                },
                new Producto
                {
                    Id = 4,
                    TipoProductoId = 2,
                    Descripcion = "Gel Energetico",
                    PrecioUnitario = 3.24
                },
                new Producto
                {
                    Id = 5,
                    TipoProductoId = 3,
                    Descripcion = "Cadena",
                    PrecioUnitario = 89.98
                },
                new Producto
                {
                    Id = 6,
                    TipoProductoId = 3,
                    Descripcion = "Sillin",
                    PrecioUnitario = 117.98
                }
            };
        }

        public List<Venta> ObtenerVentas()
        {
            return new List<Venta>
            {
                new Venta
                {
                    Id = 1,
                    Cantidad = 21,
                    FechaVenta = new DateTime(2022,01,01),
                    ProductoId = 2
                },
                new Venta
                {
                    Id = 2,
                    Cantidad = 45,
                    FechaVenta = new DateTime(2022,02,01),
                    ProductoId = 3
                },
                new Venta
                {
                    Id = 3,
                    Cantidad = 13,
                    FechaVenta = new DateTime(2022,03,01),
                    ProductoId = 1
                },
                new Venta
                {
                    Id = 4,
                    Cantidad = 43,
                    FechaVenta = new DateTime(2022,04,01),
                    ProductoId = 4
                },
                new Venta
                {
                    Id = 5,
                    Cantidad = 76,
                    FechaVenta = new DateTime(2022,05,01),
                    ProductoId = 5
                },
                new Venta
                {
                    Id = 6,
                    Cantidad = 21,
                    FechaVenta = new DateTime(2022,06,01),
                    ProductoId = 6
                },
                new Venta
                {
                    Id = 7,
                    Cantidad = 34,
                    FechaVenta = new DateTime(2022,07,01),
                    ProductoId = 1
                },
                new Venta
                {
                    Id = 8,
                    Cantidad = 78,
                    FechaVenta = new DateTime(2022,08,01),
                    ProductoId = 2
                },
                new Venta
                {
                    Id = 9,
                    Cantidad = 104,
                    FechaVenta = new DateTime(2022,09,01),
                    ProductoId = 6
                }
            };
        }
    }
}
