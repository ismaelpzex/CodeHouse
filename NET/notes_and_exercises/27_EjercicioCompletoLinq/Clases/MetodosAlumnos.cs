

using _26_EjercicioCompletoLinq.Interfaces;

namespace _26_EjercicioCompletoLinq.Clases
{
	public class MetodosALumnos : IMetodosALumnos
	{
		private List<Alumno> ListaAlumnos;
		private List<Clase> ListaClases;

		public MetodosALumnos()
		{
			LoadDataService loadDataService = new LoadDataService();

			ListaAlumnos = loadDataService.GetAlumnos();
			ListaClases = loadDataService.GetClases();
		}

		List<AlumnoExtendido> IMetodosALumnos.GetAlumnosJoin()
		{
			var query = from a in ListaAlumnos
						join c in ListaClases on a.Clase equals c.Numero
						
						select new AlumnoExtendido
						{
							NombreAlumno = a.Nombre,
							FechaDeNacimientoAlumno = a.FechaDeNacimiento,
							NotaMediaAlumno = 5,
							NombreClase = c.Nombre,
						};


			return query.ToList();

		}
	}
}

