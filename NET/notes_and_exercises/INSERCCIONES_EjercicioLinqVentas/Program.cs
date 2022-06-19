using _27_EjercicioLinqVentas.Clases;
using _27_EjercicioLinqVentas.Interfaces;
using _27_EjercicioLinqVentas.Modelos;

IDataService dataService = new DataService();

//ProductoExtendidoPaginado resultado = dataService.GetVentas2(fechaDesde: new DateTime(2022, 4, 1), fechaHasta: new DateTime(2022, 9, 1));

//foreach(ProductoExtendido pr in resultado.Resultados)
//{
//    Console.WriteLine($"El producto {pr.NombreProducto} de tipo {pr.NombreTipoProducto} tiene una venta de {pr.Cantidad} unidades por un importe total de {pr.Importe}");
//}

//ProductoExtendidoPaginado resultadoddbb = dataService.GetVentasDDBB(fechaDesde: new DateTime(2022, 4, 1), fechaHasta: new DateTime(2022, 9, 1));

//foreach (ProductoExtendido pr in resultadoddbb.Resultados)
//{
//    Console.WriteLine($"El producto {pr.NombreProducto} de tipo {pr.NombreTipoProducto} tiene una venta de {pr.Cantidad} unidades por un importe total de {pr.Importe}");
//}



//dataService.AñadirProducto();
//dataService.ModificarProducto(7, "Producto MODIFICADO");
//dataService.BorrarProducto(100);

