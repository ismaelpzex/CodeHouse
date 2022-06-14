//1
using _26_EjercicioCompletoLinq.Clases;
using _26_EjercicioCompletoLinq.Interfaces;

IMetodosALumnos metodosAlumnos = new MetodosALumnos();
List<AlumnoExtendido> alumnosClases = metodosAlumnos.GetAlumnosJoin();
foreach (AlumnoExtendido item in alumnosClases)
{
    Console.WriteLine($"{item.NombreAlumno} {item.NombreClase} {item.FechaDeNacimientoAlumno} {item.NotaMediaAlumno}");
}
