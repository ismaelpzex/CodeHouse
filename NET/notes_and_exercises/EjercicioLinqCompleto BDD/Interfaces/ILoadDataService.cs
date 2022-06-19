using test.Entidades;

namespace test.Interfaces
{
    public interface ILoadDataService
    {
        List<Alumno> GetAlumnos();
        List<Clase> GetClases();
        List<Poblacion> GetPoblaciones();
        List<Profesor> GetProfesores();

    }
}
