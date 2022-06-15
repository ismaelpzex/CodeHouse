using System;
using EjercicioLinqVentas.Entidades;

namespace EjercicioLinqVentas.Interfaces
{
	public interface IDataService
	{
		public ProductosRespuesta buscarProductos(int paginas, int resultadoPagina, string? prodesc = null, string? tpdesc = null, int? importeMin = null, int? importeMax = null, DateTime? fechaInicio = null, DateTime? fechaFin = null);
	}
}

