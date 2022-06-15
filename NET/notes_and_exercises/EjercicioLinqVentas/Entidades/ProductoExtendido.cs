using System;
namespace EjercicioLinqVentas.Entidades
{
	public class ProductoExtendido
	{
		public string Descripcion { get; set; }
		public string TipoProducto { get; set; }
		public int Cantidad { get; set; }
		public double Importe { get; set; }
		public DateTime FechaVenta { get; set; }

	}
}

