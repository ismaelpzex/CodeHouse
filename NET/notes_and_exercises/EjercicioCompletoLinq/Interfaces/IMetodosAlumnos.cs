using System;
using EjercicioCompletoLinq.Entidades;

namespace EjercicioCompletoLinq.Interfaces
{
	public interface IMetodosAlumnos
	{
		public interface IMetodosALumnos
		{
			public List<AlumnoExtendido> GetAlumnosJoin();
			public AlumnoExtendidoPaginado GetAlumnosJoinPaginados(int page, int itemsPage);
			public List<AlumnoExtendido> GetAlumnosJoinNotaCorte();
			List<AlumnoExtendido> GetAlumnosJoinFecha(DateTime initialDate, DateTime endDate);
			public List<AlumnoExtendido> GetAlumnosJoinPoblacion();
		}
	}
}

