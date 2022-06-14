using _26_EjercicioCompletoLinq.Clases;
using _26_EjercicioCompletoLinq.Entidades;
using _26_EjercicioCompletoLinq.Interfaces;

namespace _26_EjercicioCompletoLinq.Clases
{
	public class DataService 
	{
		private List<Alumno> ListaAlumnos;
		private List<Clase> ListaClases;
		private List<Poblacion> ListaPoblaciones;
		private List<Profesor> ListaProfesores;

		public DataService()
		{
			LoadDataService loadDataService = new LoadDataService();

			ListaAlumnos = loadDataService.GetAlumnos();
			ListaClases = loadDataService.GetClases();
			ListaPoblaciones = loadDataService.GetPoblaciones();
			ListaProfesores = loadDataService.GetProfesores();
		}
	}


}

