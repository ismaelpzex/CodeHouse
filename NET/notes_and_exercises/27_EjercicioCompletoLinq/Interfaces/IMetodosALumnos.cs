using _26_EjercicioCompletoLinq.Clases;
using _26_EjercicioCompletoLinq.Entidades;
using _26_EjercicioCompletoLinq.Interfaces;

namespace _26_EjercicioCompletoLinq.Interfaces
{
	public interface IMetodosALumnos
	{
		public List<AlumnoExtendido> GetAlumnosJoin();
	}
}

