using System;
using EjercicioCompletoLinq.Entidades;

namespace EjercicioCompletoLinq.Interfaces
{
	public interface IMetodosAlumnos
	{
		public interface IMetodosALumnos
		{
			public List<AlumnoExtendido> GetAlumnosJoin();
			public AlumnoExtendidoPaginado GetAlumnosJoinPaginados(char letra, int page, int itemsPage);
			public List<AlumnoExtendido> GetAlumnosJoinNotaCorte(int nota = 5);
			List<AlumnoExtendido> GetAlumnosJoinFecha(DateTime initialDate, DateTime endDate);
			public List<AlumnoExtendido> GetAlumnosJoinPoblacion();
		}
	}
}

