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
        private ApplicationDbContext _Context;

        public DataService()
        {
            _Context = new ApplicationDbContext();
            ILoadDataService loadDataService = new LoadDataService();
            Productos = loadDataService.ObtenerProductos();
            TipoProductos = loadDataService.ObtenerTiposProductos();
            Ventas = loadDataService.ObtenerVentas();
        }

        public ProductosRespuesta buscarProductos(int? paginas = null, int? resultadoPagina = null, string? prodesc = null, string? tpdesc = null, int? importeMin = null, int? importeMax = null, DateTime? fechaInicio = null, DateTime? fechaFin = null)
        {
            {
                ProductosRespuesta result = new ProductosRespuesta();

                var query = from p in Productos
                            join t in TipoProductos on p.TipoProductoId equals t.Id
                            join v in Ventas on p.Id equals v.ProductoId
                            let importes = p.PrecioUnitario * v.Cantidad
                            orderby v.Cantidad descending
                            where (string.IsNullOrEmpty(prodesc) || p.Descripcion == prodesc)
                            && (string.IsNullOrEmpty(tpdesc) || t.Descripcion == tpdesc)
                            && (importeMin == null || importes >= importeMin)
                            && (importeMax == null || importes <= importeMax)
                            && (fechaInicio == null || v.FechaVenta >= fechaInicio)
                            && (fechaFin == null || v.FechaVenta <= fechaFin)

                            select new ProductoExtendido
                            {
                                Descripcion = p.Descripcion,
                                TipoProducto = t.Descripcion,
                                Importe = importes,
                                Cantidad = v.Cantidad,
                            };

                var query2 = from r in query.ToList()
                             group r by new { r.Descripcion, r.TipoProducto } into agrupacion
                             select new ProductoExtendido
                             {
                                 Descripcion = agrupacion.Key.Descripcion,
                                 TipoProducto = agrupacion.Key.TipoProducto,
                                 Importe = (from a in agrupacion
                                            select a.Importe).Sum(),
                                 Cantidad = (from a in agrupacion
                                             select a.Cantidad).Sum()
                             };

                result.Total = query2.Count();
                result.Paginas = paginas == null ? 1 : paginas.Value;
                result.ResultadosPorPagina = resultadoPagina == null ? result.Total : resultadoPagina.Value; ;
                result.Productos = query2.Skip((result.Paginas - 1) * result.ResultadosPorPagina).Take(result.ResultadosPorPagina).ToList();

                return result;
            }

            {



            }

        }

        public ProductosRespuesta buscarProductosBDD(int? paginas = null, int? resultadoPagina = null, string? prodesc = null, string? tpdesc = null, int? importeMin = null, int? importeMax = null, DateTime? fechaInicio = null, DateTime? fechaFin = null)
        {
            ProductosRespuesta result = new ProductosRespuesta();

            var query = from p in _Context.Productos
                        join t in _Context.TipoProductos on p.TipoProductoId equals t.Id
                        join v in _Context.Ventas on p.Id equals v.ProductoId
                        let importes = p.PrecioUnitario * v.Cantidad
                        orderby v.Cantidad descending
                        where (string.IsNullOrEmpty(prodesc) || p.Descripcion == prodesc)
                        && (string.IsNullOrEmpty(tpdesc) || t.Descripcion == tpdesc)
                        && (importeMin == null || importes >= importeMin)
                        && (importeMax == null || importes <= importeMax)
                        && (fechaInicio == null || v.FechaVenta >= fechaInicio)
                        && (fechaFin == null || v.FechaVenta <= fechaFin)

                        select new ProductoExtendido
                        {
                            Descripcion = p.Descripcion,
                            TipoProducto = t.Descripcion,
                            Importe = importes,
                            Cantidad = v.Cantidad,
                        };

            var query2 = from r in query.ToList()
                         group r by new { r.Descripcion, r.TipoProducto } into agrupacion
                         select new ProductoExtendido
                         {
                             Descripcion = agrupacion.Key.Descripcion,
                             TipoProducto = agrupacion.Key.TipoProducto,
                             Importe = (from a in agrupacion
                                        select a.Importe).Sum(),
                             Cantidad = (from a in agrupacion
                                         select a.Cantidad).Sum()
                         };

            result.Total = query2.Count();
            result.Paginas = paginas == null ? 1 : paginas.Value;
            result.ResultadosPorPagina = resultadoPagina == null ? result.Total : resultadoPagina.Value; ;
            result.Productos = query2.Skip((result.Paginas - 1) * result.ResultadosPorPagina).Take(result.ResultadosPorPagina).ToList();

            return result;
        }

        public void AñadirProducto()
        {
            Producto nuevoProducto = new Producto();
            nuevoProducto.Descripcion = "producto insertado";
            nuevoProducto.PrecioUnitario = 5.76;
            nuevoProducto.TipoProductoId = 1;
            _Context.Productos.Add(nuevoProducto);
            _Context.SaveChanges();
        }
    }
}  