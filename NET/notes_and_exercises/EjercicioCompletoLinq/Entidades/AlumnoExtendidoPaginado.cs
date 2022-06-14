using System;
namespace EjercicioCompletoLinq.Entidades
{
	public class AlumnoExtendidoPaginado
	{
		public List<AlumnoExtendido> Alumnos { get; set; }
		public int Page { get; set; }
		public int ItemsPage { get; set; }
		public int Total { get; set; }
	}
}

