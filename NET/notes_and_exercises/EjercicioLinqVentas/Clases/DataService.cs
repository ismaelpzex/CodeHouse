using System;
using EjercicioLinqVentas.Entidades;
using EjercicioLinqVentas.Interfaces;

namespace EjercicioLinqVentas.Clases
{
    public class DataService : IDataService
    {
        private List<Producto> Productos;
        private List<TipoProducto> TipoProductos;
        private List<Venta> Ventas;

        public DataService()
        {
            ILoadDataService loadDataService = new LoadDataService();
            Productos = loadDataService.ObtenerProductos();
            TipoProductos = loadDataService.ObtenerTiposProductos();
            Ventas = loadDataService.ObtenerVentas();
        }

        public ProductosRespuesta buscarProductos(int paginas, int resultadoPagina, string? prodesc = null, string? tpdesc = null, int? importeMin = null, int? importeMax = null, DateTime? fechaInicio = null, DateTime? fechaFin = null)
        {
            {
                ProductosRespuesta result = new ProductosRespuesta();

                var query = from p in Productos
                            join t in TipoProductos on p.TipoProductoId equals t.Id
                            join v in Ventas on p.TipoProductoId equals v.ProductoId
                            let importes = p.PrecioUnitario * v.Cantidad
                            orderby v.Cantidad descending
                            where (string.IsNullOrEmpty(prodesc) || p.Descripcion == prodesc)
                            && (string.IsNullOrEmpty(tpdesc) || t.Descripcion == tpdesc)
                            && (importeMin == null || importes >= importeMin)
                            && (importeMax == null || importes <= importeMax)
                            && (fechaInicio == null || v.FechaVenta >= fechaInicio)
                            && (fechaFin == null || v.FechaVenta >= fechaFin)
                            select new ProductoExtendido
                            {
                                Descripcion = p.Descripcion,
                                TipoProducto = t.Descripcion,
                                Importe = importes,
                                Cantidad = v.Cantidad,
                                FechaVenta = v.FechaVenta
                            };



                result.Total = query.Count();
                result.Paginas = paginas;
                result.ResultadosPorPagina = resultadoPagina;
                result.Productos = query.Skip(paginas - 1 * resultadoPagina).Take(resultadoPagina).ToList();





                return result;
            }
        }
    }
    }
