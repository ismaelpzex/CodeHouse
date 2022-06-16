using System;
namespace EjercicioLinqVentas.Entidades
{
	public class ProductosRespuesta
	{
		public List<ProductoExtendido> Productos { get; set; }
		public int Paginas { get; set; }
		public int ResultadosPorPagina { get; set; }
		public int Total { get; set; }
	}
}

