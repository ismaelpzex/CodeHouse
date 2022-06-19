using _27_EjercicioLinqVentas.Entidades;
using _27_EjercicioLinqVentas.Interfaces;
using _27_EjercicioLinqVentas.Modelos;

namespace _27_EjercicioLinqVentas.Clases
{
    public class DataService : IDataService
    {
        private List<TipoProducto> ListaTipoProductos { get; set; }
        private List<Producto> ListaProductos { get; set; }
        private List<Venta> ListaVentas { get; set; }

        private ApplicationDbContext _context;

        public DataService()
        {
            ILoadDataService loadDataService = new LoadDataService();

            ListaTipoProductos = loadDataService.ObtenerTiposProductos();
            ListaProductos = loadDataService.ObtenerProductos();
            ListaVentas = loadDataService.ObtenerVentas();

            _context = new ApplicationDbContext();

        }

        public ProductoExtendidoPaginado GetVentas(string? filtroProducto = null, string? filtroTipo = null, DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? importeDesde = null, double? importeHasta = null, int pagina = 1, int elementosPorPagina = 50)
        {
            ProductoExtendidoPaginado resultado = new ProductoExtendidoPaginado();

            var query = from v in ListaVentas

                        join p in ListaProductos on v.ProductoId equals p.Id

                        join t in ListaTipoProductos on p.TipoProductoId equals t.Id

                        let importeTotal = v.Cantidad * p.PrecioUnitario

                        where (string.IsNullOrEmpty(filtroProducto) || p.Descripcion == filtroProducto)

                        && (string.IsNullOrEmpty(filtroTipo) || t.Descripcion == filtroTipo)

                        && (fechaDesde == null || v.FechaVenta >= fechaDesde)

                        && (fechaHasta == null || v.FechaVenta <= fechaHasta)

                        && (importeDesde == null || importeTotal >= importeDesde)

                        && (importeHasta == null || importeTotal <= importeHasta)

                        select new ProductoExtendido
                        {
                            NombreProducto = p.Descripcion,
                            NombreTipoProducto = t.Descripcion,
                            Cantidad = v.Cantidad,
                            Importe = importeTotal
                        };

            var query2 = from q in query.ToList()

                         group q by new { q.NombreProducto, q.NombreTipoProducto } into a

                         select new ProductoExtendido
                         {
                             NombreProducto = a.Key.NombreProducto,
                             NombreTipoProducto = a.Key.NombreTipoProducto,
                             Cantidad = a.Sum(v => v.Cantidad),
                             Importe = a.Sum(v => v.Importe)
                         };

            int skip = (pagina - 1) * elementosPorPagina;
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;
            resultado.Total = query2.Count();
            resultado.Resultados = query2.Skip(skip).Take(elementosPorPagina).ToList();

            return resultado;
        }

        public ProductoExtendidoPaginado GetVentas2(string? filtroProducto = null, string? filtroTipo = null, DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? importeDesde = null, double? importeHasta = null, int pagina = 1, int elementosPorPagina = 50)
        {
            ProductoExtendidoPaginado resultado = new ProductoExtendidoPaginado();

            var query = from v in ListaVentas

                        where (fechaDesde == null || v.FechaVenta >= fechaDesde)
                        
                        && (fechaHasta == null || v.FechaVenta <= fechaHasta)
                        
                        group v by v.ProductoId into a
                        
                        join p in ListaProductos on a.Key equals p.Id
                        
                        join t in ListaTipoProductos on p.TipoProductoId equals t.Id
                        
                        let importeTotal = a.Sum(v => v.Cantidad) * p.PrecioUnitario
                        
                        where (string.IsNullOrEmpty(filtroProducto) || p.Descripcion == filtroProducto)

                        && (string.IsNullOrEmpty(filtroTipo) || t.Descripcion == filtroTipo)

                        && (importeDesde == null || importeTotal >= importeDesde)

                        && (importeHasta == null || importeTotal <= importeHasta)

                        select new ProductoExtendido
                        {
                            NombreProducto = p.Descripcion,
                            NombreTipoProducto = t.Descripcion,
                            Cantidad = a.Sum(v => v.Cantidad),
                            Importe = importeTotal
                        };

            int skip = (pagina - 1) * elementosPorPagina;
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;
            resultado.Total = query.Count();
            resultado.Resultados = query.Skip(skip).Take(elementosPorPagina).ToList();

            return resultado;
        }

        public ProductoExtendidoPaginado GetVentasDDBB(string? filtroProducto = null, string? filtroTipo = null, DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? importeDesde = null, double? importeHasta = null, int pagina = 1, int elementosPorPagina = 50)
        {
            ProductoExtendidoPaginado resultado = new ProductoExtendidoPaginado();

            var query = from v in _context.Ventas

                        join p in _context.Productos on v.ProductoId equals p.Id

                        join t in _context.TipoProductos on p.TipoProductoId equals t.Id

                        let importeTotal = v.Cantidad * p.PrecioUnitario

                        where (string.IsNullOrEmpty(filtroProducto) || p.Descripcion == filtroProducto)

                        && (string.IsNullOrEmpty(filtroTipo) || t.Descripcion == filtroTipo)

                        && (fechaDesde == null || v.FechaVenta >= fechaDesde)

                        && (fechaHasta == null || v.FechaVenta <= fechaHasta)

                        && (importeDesde == null || importeTotal >= importeDesde)

                        && (importeHasta == null || importeTotal <= importeHasta)

                        select new ProductoExtendido
                        {
                            NombreProducto = p.Descripcion,
                            NombreTipoProducto = t.Descripcion,
                            Cantidad = v.Cantidad,
                            Importe = importeTotal
                        };

            var query2 = from q in query.ToList()

                         group q by new { q.NombreProducto, q.NombreTipoProducto } into a

                         select new ProductoExtendido
                         {
                             NombreProducto = a.Key.NombreProducto,
                             NombreTipoProducto = a.Key.NombreTipoProducto,
                             Cantidad = a.Sum(v => v.Cantidad),
                             Importe = a.Sum(v => v.Importe)
                         };

            int skip = (pagina - 1) * elementosPorPagina;
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;
            resultado.Total = query2.Count();
            resultado.Resultados = query2.Skip(skip).Take(elementosPorPagina).ToList();

            return resultado;
        }
        public void AñadirProducto()
        {
            Producto nuevoProducto = new Producto();
            nuevoProducto.Descripcion = "producto insertado";
            nuevoProducto.PrecioUnitario = 5.76;
            nuevoProducto.TipoProductoId = 1;
            _context.Productos.Add(nuevoProducto);
            _context.SaveChanges();
        }

        public void ModificarProducto(int id, string descripcion)
        {
            Producto producto = (from p in _context.Productos
                                 where p.Id == id
                                 select p).First();

            producto.Descripcion = descripcion;
            _context.Productos.Update(producto);
            _context.SaveChanges();

        }

        public void BorrarProducto(int id)
        {
            Producto? producto = (from p in _context.Productos
                                 where p.Id == id
                                 select p).FirstOrDefault();
            if (producto != null)
            {
                _context.Productos.Remove(producto);
                _context.SaveChanges();
            }
            else
                Console.WriteLine($"El producto con id {id} no existe");
        }
    }
}
