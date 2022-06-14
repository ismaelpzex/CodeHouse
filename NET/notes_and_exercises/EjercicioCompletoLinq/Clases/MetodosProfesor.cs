using System;
using EjercicioCompletoLinq.Entidades;
using EjercicioCompletoLinq.Interfaces;

namespace EjercicioCompletoLinq.Clases
{
	public class MetodosProfesor : IMetodosProfesor
	{
		private List<Profesor> ListaProfesores;
		private List<Clase> ListaClases;
		private List<Poblacion> ListaPoblaciones;

		public MetodosProfesor()
		{
			LoadDataService loadDataService = new LoadDataService();

			ListaProfesores = loadDataService.GetProfesores();
			ListaClases = loadDataService.GetClases();
			ListaPoblaciones = loadDataService.GetPoblaciones();
		}

        public List<ProfesorExtendido> GetProfesoresClasePoblacion()
        {
			var query = from p in ListaProfesores
						join c in ListaClases on p.Clase equals c.Numero
						join pb in ListaPoblaciones on p.PoblacionId equals pb.Id
						orderby p.Nombre ascending
						select new ProfesorExtendido
						{
							Nombre = p.Nombre,
							Clase = c.Nombre,
							FechaDeNacimiento = p.FechaDeNacimiento,
							Poblacion = pb.Nombre,
						};
			return query.ToList();

		}

        public List<ProfesorExtendido> GetProfesoresFiltroPoblacion(string poblacion)
        {
			var query = from p in ListaProfesores
						join c in ListaClases on p.Clase equals c.Numero
						join pb in ListaPoblaciones on p.PoblacionId equals pb.Id
						where pb.Nombre == poblacion
						select new ProfesorExtendido
						{
							Nombre = p.Nombre,
							Clase = c.Nombre,
							FechaDeNacimiento = p.FechaDeNacimiento,
							Poblacion = pb.Nombre,
						};
			return query.ToList();
		}

        public ProfesorExtendidoPaginacion GetProfesorExtendidoPaginado(int page, int itemsPage)
        {
			ProfesorExtendidoPaginacion result = new ProfesorExtendidoPaginacion();
			var query = from p in ListaProfesores
						join c in ListaClases on p.Clase equals c.Numero
						join pb in ListaPoblaciones on p.PoblacionId equals pb.Id
						orderby p.Nombre ascending
						select new ProfesorExtendido
						{
							Nombre = p.Nombre,
							Clase = c.Nombre,
							FechaDeNacimiento = p.FechaDeNacimiento,
							Poblacion = pb.Nombre,
						};

			result.Total = query.Count();
			result.Page = page;
			result.ItemsPage = itemsPage;
			result.Profesores = query.Skip(page - 1 * itemsPage).Take(itemsPage).ToList();

			return result;
		}
    }
}

