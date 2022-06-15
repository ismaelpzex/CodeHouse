using EjercicioLinqVentas.Clases;
using EjercicioLinqVentas.Entidades;
using EjercicioLinqVentas.Interfaces;

IDataService dataService = new DataService();
int paginas = 1;
int itemsPaginas = 200;
string? procDesc = null;
string? tpDesck = null;
int? importeMin = 100;
int importeMax = 1000;
DateTime? fechaInicio = new DateTime(2022, 8, 1);
//DateTime fechaFin = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day);
DateTime? fechaFin = null;
ProductosRespuesta VentasQuery1 = dataService.buscarProductos(paginas, itemsPaginas, procDesc, tpDesck, importeMin, importeMax, fechaInicio, fechaFin);
foreach (ProductoExtendido producto in VentasQuery1.Productos)
{
    Console.WriteLine($"Producto :{producto.Descripcion}\nTipo de producto: {producto.TipoProducto}\nUnidades: {producto.Cantidad}\nImporte TOTAL: {(float)producto.Importe}\nFecha de Venta: {producto.FechaVenta.Date.ToString("dd/MM/yyyy")}\n");
}
