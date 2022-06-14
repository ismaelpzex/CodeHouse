using System;
using EjercicioCompletoLinq.Entidades;

namespace EjercicioCompletoLinq.Interfaces
{
	public interface IMetodosProfesor
	{
		public List<ProfesorExtendido> GetProfesoresClasePoblacion();
		public List<ProfesorExtendido> GetProfesoresFiltroPoblacion(string poblacion);
		public ProfesorExtendidoPaginacion GetProfesorExtendidoPaginado(int page, int itemsPage);
	}
}

