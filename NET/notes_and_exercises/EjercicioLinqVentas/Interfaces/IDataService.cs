using System;
using EjercicioLinqVentas.Entidades;

namespace EjercicioLinqVentas.Interfaces
{
	public interface IDataService
	{
		public ProductosRespuesta buscarProductos(int? paginas = null, int? resultadoPagina = null, string? prodesc = null, string? tpdesc = null, int? importeMin = null, int? importeMax = null, DateTime? fechaInicio = null, DateTime? fechaFin = null);
		public ProductosRespuesta buscarProductosBDD(int? paginas = null, int? resultadoPagina = null, string? prodesc = null, string? tpdesc = null, int? importeMin = null, int? importeMax = null, DateTime? fechaInicio = null, DateTime? fechaFin = null);
	}
}

