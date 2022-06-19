using _28_EjercicioAccesoDatos.Clases;
using _28_EjercicioAccesoDatos.Entidades;
using _28_EjercicioAccesoDatos.Interfaces;
using _28_EjercicioAccesoDatos.Modelos;

IServicioAutor servicioAutor = new ServicioAutor();
IServicioLibro servicioLibro = new ServicioLibro();

List<string> NuevoListadoAutores = new List<string>();

string autor1 = "PARA BORRAR 3";
string autor2 = "PARA BORRAR 4";

NuevoListadoAutores.Add(autor1);
NuevoListadoAutores.Add(autor2);

//servicioAutor.AñadirAutores(NuevoListadoAutores);
Console.WriteLine("Autores añadidos");




List<Libro> NuevoListadoLibros = new List<Libro>();

Libro libro1 = new Libro
{
    Titulo = "La noche del miedo OSCUROOOOO",
    AutorId = 17,

};
Libro libro2 = new Libro
{
    Titulo = "Caballooooooooo de troya numero 2",
    AutorId = 17,

};

NuevoListadoLibros.Add(libro1);
NuevoListadoLibros.Add(libro2);

//servicioLibro.InsertarLibros(NuevoListadoLibros);
Console.WriteLine("Libros añadidos\n");




string autor = "PARA BORRAR 4";

RespuestaAutoresLibrosTotal? AutorLibros = servicioAutor.Query1(autor);

if (AutorLibros.Error == null)
    Console.WriteLine($"El Autor: {AutorLibros.Nombre} ha escrito {AutorLibros.NumeroLibros} Libros");
else
    Console.WriteLine($"ERROR; {AutorLibros.Error}");



//servicioLibro.BorrarLibro("La noche del miedo OSCURO");

servicioAutor.BorrarAutor("PARA BORRAR2");

//servicioLibro.ModificarLibro("La noche del miedo", "La noche del miedo MODIFICADO");



