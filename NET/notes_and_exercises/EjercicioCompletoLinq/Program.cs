using EjercicioCompletoLinq.Clases;
using EjercicioCompletoLinq.Entidades;
using static EjercicioCompletoLinq.Interfaces.IMetodosAlumnos;

// EJERCICIO 1 y 2 JUNTOS

IMetodosALumnos metodosAlumnos = new MetodosALumnos();
List<AlumnoExtendido> alumnosClases = metodosAlumnos.GetAlumnosJoin();
foreach (AlumnoExtendido item in alumnosClases)
{
    Console.WriteLine($"Nombre: {item.NombreAlumno}\nNombre Clase: {item.NombreClase}\nFecha Nacimient: {item.FechaDeNacimientoAlumno}\nNota Media: {item.NotaMediaAlumno}\n");
}

// EJERCICIO 3
Console.WriteLine("\n\nPAGINACIÓN\n\n");
AlumnoExtendidoPaginado paginados = metodosAlumnos.GetAlumnosJoinPaginados('R', 1, 4);
Console.WriteLine($"Página {paginados.Page} items {paginados.ItemsPage} de {paginados.Total}");
foreach (AlumnoExtendido alumno in paginados.Alumnos)
{
    Console.WriteLine($"Nombre:{alumno.NombreAlumno}\nNota media {alumno.NotaMediaAlumno}\nFecha nacimiento {alumno.FechaDeNacimientoAlumno}\nNombre de la clase: {alumno.NombreClase}\n");
}

// EJERCICIO 4
Console.WriteLine("\n\nFILTRO NOTA MEDIA\n\n");
List<AlumnoExtendido> alumnosClasesNotaCorte = metodosAlumnos.GetAlumnosJoinNotaCorte();
foreach (AlumnoExtendido item in alumnosClasesNotaCorte)
{
    Console.WriteLine($"Nombre: {item.NombreAlumno}\nNombre Clase: {item.NombreClase}\nFecha Nacimient: {item.FechaDeNacimientoAlumno}\nNota Media: {item.NotaMediaAlumno}\n");
}


// EJERCICIO 5 y 6
Console.WriteLine("\n\nFILTRO FECHA NACIMIENTO\n\n");
DateTime fechaInicio = new DateTime();
DateTime fechaFin = DateTime.Now;
List<AlumnoExtendido> alumnosClaseFechaCorte = metodosAlumnos.GetAlumnosJoinFecha(fechaInicio, fechaFin);
Console.WriteLine($"Fecha inicio {fechaInicio}");
Console.WriteLine($"Fecha in {fechaFin}\n");
foreach (AlumnoExtendido item in alumnosClaseFechaCorte)
{
    Console.WriteLine($"Nombre: {item.NombreAlumno}\nNombre Clase: {item.NombreClase}\nFecha Nacimient: {item.FechaDeNacimientoAlumno}\nNota Media: {item.NotaMediaAlumno}\n");
}

// EJERCICIO 7
Console.WriteLine("\n\nLISTADO CON POBLACIONES\n\n");
List<AlumnoExtendido> alumnosClasesPoblaciones = metodosAlumnos.GetAlumnosJoinPoblacion();
foreach (AlumnoExtendido item in alumnosClasesPoblaciones)
{
    Console.WriteLine($"Nombre: {item.NombreAlumno}\nNombre Clase: {item.NombreClase}\nFecha Nacimient: {item.FechaDeNacimientoAlumno}\nNota Media: {item.NotaMediaAlumno}\nPoblación {item.Poblacion}\n");
}

// EJERCICIO 8 y 8.2
Console.WriteLine("\n\nEJERCICIO 8 y 8.2 (ORDENADOS POR NOMBRE)\n\n");
MetodosProfesor metodoProfesor = new MetodosProfesor();
List<ProfesorExtendido> profesores = metodoProfesor.GetProfesoresClasePoblacion();
foreach (ProfesorExtendido profesor in profesores)
{
    Console.WriteLine($"Nombre: {profesor.Nombre}\nNombre Clase: {profesor.Clase}\nFecha Nacimient: {profesor.FechaDeNacimiento}\nPoblación: {profesor.Poblacion}\n");
}

// EJERCICIO 8.1
Console.WriteLine("\n\nEJERCICIO 8.1 POBLACIONES\n\n");
List<ProfesorExtendido> profesoresPorPoblacion = metodoProfesor.GetProfesoresFiltroPoblacion("Madrid");
foreach (ProfesorExtendido profesor in profesoresPorPoblacion)
{
    Console.WriteLine($"Nombre: {profesor.Nombre}\nNombre Clase: {profesor.Clase}\nFecha Nacimient: {profesor.FechaDeNacimiento}\nPoblación: {profesor.Poblacion}\n");
}

// EJERCICIO 8.3
Console.WriteLine("\n\nPAGINACIÓN PROFES\n\n");
ProfesorExtendidoPaginacion profesPaginados = metodoProfesor.GetProfesorExtendidoPaginado(1, 4);
Console.WriteLine($"Página {profesPaginados.Page} items {profesPaginados.ItemsPage} de {profesPaginados.Total}");
foreach (ProfesorExtendido profesor in profesPaginados.Profesores)
{
    Console.WriteLine($"Nombre: {profesor.Nombre}\nNombre Clase: {profesor.Clase}\nFecha Nacimient: {profesor.FechaDeNacimiento}\nPoblación: {profesor.Poblacion}\n");
}