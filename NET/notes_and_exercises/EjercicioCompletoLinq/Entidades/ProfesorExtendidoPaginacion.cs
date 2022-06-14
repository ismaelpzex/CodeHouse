using System;
namespace EjercicioCompletoLinq.Entidades
{
	public class ProfesorExtendidoPaginacion
	{
		public List<ProfesorExtendido> Profesores { get; set; }
		public int Page { get; set; }
		public int ItemsPage { get; set; }
		public int Total { get; set; }
	}
}

