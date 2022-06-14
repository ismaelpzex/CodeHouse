using _26_EjercicioCompletoLinq.Clases;
using _26_EjercicioCompletoLinq.Entidades;
using _26_EjercicioCompletoLinq.Interfaces;

namespace EjercicioCompletoLinq.Interfaces
{
    public interface ILoadDataService
    {
        List<Alumno> GetAlumnos();
        List<Clase> GetClases();
        List<Poblacion> GetPoblaciones();
        List<Profesor> GetProfesores();

    }
}
