using System;
using System.Linq;
using EjercicioCompletoLinq.Entidades;
using static EjercicioCompletoLinq.Interfaces.IMetodosAlumnos;

namespace EjercicioCompletoLinq.Clases
{
	public class MetodosALumnos : IMetodosALumnos
	{
		private List<Alumno> ListaAlumnos;
		private List<Clase> ListaClases;
		private List<Poblacion> ListaPoblaciones;

		public MetodosALumnos()
		{
			LoadDataService loadDataService = new LoadDataService();

			ListaAlumnos = loadDataService.GetAlumnos();
			ListaClases = loadDataService.GetClases();
			ListaPoblaciones = loadDataService.GetPoblaciones();
		}

		public List<AlumnoExtendido> GetAlumnosJoin()
		{
			var query = from a in ListaAlumnos
						join c in ListaClases on a.Clase equals c.Numero
						let notaMedia = a.Notas.Average()
						select new AlumnoExtendido
						{
							NombreAlumno = a.Nombre,
							FechaDeNacimientoAlumno = a.FechaDeNacimiento,
							NotaMediaAlumno = notaMedia,
							NombreClase = c.Nombre,
						};


			return query.ToList();
		}

		public AlumnoExtendidoPaginado GetAlumnosJoinPaginados(char letra, int page = 1, int itemsPage = 5)
		{
			AlumnoExtendidoPaginado result = new AlumnoExtendidoPaginado();
			var query = from a in ListaAlumnos
						join c in ListaClases on a.Clase equals c.Numero
						where a.Nombre.StartsWith(letra)
						let notaMedia = a.Notas.Average()
						select new AlumnoExtendido
						{
							NombreAlumno = a.Nombre,
							FechaDeNacimientoAlumno = a.FechaDeNacimiento,
							NotaMediaAlumno = notaMedia,
							NombreClase = c.Nombre,
						};

			result.Total = query.Count();
			result.Page = page;
			result.ItemsPage = itemsPage;
			result.Alumnos = query.Skip(page - 1 * itemsPage).Take(itemsPage).ToList();

			return result;
		}
		public List<AlumnoExtendido> GetAlumnosJoinNotaCorte(int nota = 5)
		{
			var query = from a in ListaAlumnos
						join c in ListaClases on a.Clase equals c.Numero
						let notaMedia = a.Notas.Average()
						where nota == null || notaMedia >= nota
						select new AlumnoExtendido
						{
							NombreAlumno = a.Nombre,
							FechaDeNacimientoAlumno = a.FechaDeNacimiento,
							NotaMediaAlumno = notaMedia,
							NombreClase = c.Nombre,
						};


			return query.ToList();
		}

        public List<AlumnoExtendido> GetAlumnosJoinFecha(DateTime initialDate = new DateTime(), DateTime endDate = new DateTime())
        {
			{
				var query = from a in ListaAlumnos
							join c in ListaClases on a.Clase equals c.Numero
							where a.FechaDeNacimiento >= initialDate && a.FechaDeNacimiento <= endDate
							let notaMedia = a.Notas.Average()
							select new AlumnoExtendido
							{
								NombreAlumno = a.Nombre,
								FechaDeNacimientoAlumno = a.FechaDeNacimiento,
								NotaMediaAlumno = notaMedia,
								NombreClase = c.Nombre,
							};


				return query.ToList();
			}
		}

        public List<AlumnoExtendido> GetAlumnosJoinPoblacion()
        {
			var query = from a in ListaAlumnos
						join c in ListaClases on a.Clase equals c.Numero
						join p in ListaPoblaciones on a.PoblacionId equals p.Id
						let notaMedia = a.Notas.Average()
						select new AlumnoExtendido
						{
							NombreAlumno = a.Nombre,
							FechaDeNacimientoAlumno = a.FechaDeNacimiento,
							NotaMediaAlumno = notaMedia,
							NombreClase = c.Nombre,
							Poblacion = p.Nombre,
						};


			return query.ToList();
		}
    }
}

