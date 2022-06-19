using test.Clases;
using test.Entidades;
using test.Interfaces;

IMetodosAlumnos metodosAlumno = new MetodosAlumnos();

Console.WriteLine("----------Alumnos filtrados por nota media-----------");

AlumnoExtendidoPaginado resultadoNotaMedia = metodosAlumno.GetAlumnosJoin(notaMedia: 5.0, pagina:1, elementosPorPagina: 200);

foreach(AlumnoExtendido alumno in resultadoNotaMedia.Resultados)
{
    Console.WriteLine($"El alumno {alumno.NombreAlumno} tiene una nota media {alumno.NotaMediaAlumno}");
}

Console.WriteLine("----------Alumnos que empiecen por R y paginados-----------");

AlumnoExtendidoPaginado resultadoPorNombre = metodosAlumno.GetAlumnosJoin(filtroNombre: "R", pagina: 1, elementosPorPagina: 2);

foreach (AlumnoExtendido alumno in resultadoPorNombre.Resultados)
{
    Console.WriteLine($"El alumno {alumno.NombreAlumno} empieza por R y esta en la pagina {resultadoPorNombre.Pagina}");
}

AlumnoExtendidoPaginado resultadoPorNombre2 = metodosAlumno.GetAlumnosJoin(filtroNombre: "R", pagina: 2, elementosPorPagina: 2);

foreach (AlumnoExtendido alumno in resultadoPorNombre2.Resultados)
{
    Console.WriteLine($"El alumno {alumno.NombreAlumno} empieza por R y esta en la pagina {resultadoPorNombre2.Pagina}");
}

Console.WriteLine("----------Alumnos filtrados por fecha-----------");

AlumnoExtendidoPaginado resultadoPorFecha = metodosAlumno.GetAlumnosJoin(fechaDesde: new DateTime(2002,1,1), fechaHasta: new DateTime(2002, 12,31), pagina: 1, elementosPorPagina: 200);

foreach (AlumnoExtendido alumno in resultadoPorFecha.Resultados)
{
    Console.WriteLine($"El alumno {alumno.NombreAlumno} nació el {alumno.FechaDeNacimientoAlumno.ToShortDateString()}");
}

Console.WriteLine("----------Profesores filtrados por poblacion y paginados-----------");

IMetodosProfesor metodosProfesor = new MetodosProfesor();

ProfesorExtendidoPaginado resultadoProfesores = metodosProfesor.GetProfesores(filtroPoblacion: "Madrid", pagina:1, elementosPorPagina: 1);

foreach(ProfesorExtendido profesor in resultadoProfesores.Resultados)
{
    Console.WriteLine($"{profesor.NombreProfesor} es profesor de {profesor.NombreClase} y es de {profesor.NombrePoblacion}");
}