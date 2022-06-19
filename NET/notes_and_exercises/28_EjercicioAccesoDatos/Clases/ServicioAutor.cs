using System;
using _28_EjercicioAccesoDatos.Entidades;
using _28_EjercicioAccesoDatos.Interfaces;
using _28_EjercicioAccesoDatos.Modelos;

namespace _28_EjercicioAccesoDatos.Clases
{
    public class ServicioAutor : IServicioAutor
    {
        private ApplicationDbContext _context;

        public ServicioAutor()
        {
            _context = new ApplicationDbContext();
            

        }

        public void AñadirAutores(List<string> ListadoAutores)
        {
            foreach (string autor in ListadoAutores)
            {
                Autor nuevoAutor = new Autor();
                nuevoAutor.Nombre = autor;
                _context.Add(nuevoAutor);
                _context.SaveChanges();
            }
        }


        public RespuestaAutoresLibrosTotal? Query1(string autor)
        {

            var query = from a in _context.Autores
                        where a.Nombre == autor
                        select new RespuestaAutoresLibrosTotal
                        {
                            Nombre = a.Nombre,
                            NumeroLibros = _context.Libros.Where(b => b.AutorId == a.Id).Count(),
                        };

            RespuestaAutoresLibrosTotal? resultado = new RespuestaAutoresLibrosTotal();
            resultado = query.FirstOrDefault();

            if (resultado == null)
            {
                resultado = new RespuestaAutoresLibrosTotal();
                resultado.Error = "204 Not Content";
            }

            return resultado;


        }
        public void BorrarAutor(string nombre)
        {
            {
                Autor? autor = _context.Autores.Where(a => a.Nombre == nombre).FirstOrDefault();

                if (autor != null)
                {
                    IServicioLibro servicioLibro = new ServicioLibro();
                    servicioLibro.BorrarLibrosAutor(autor);
                    _context.Autores.Remove(autor);
                    _context.SaveChanges();
                    Console.WriteLine($"El Autor {autor.Nombre} se ha borrado correctamente");
                }
                else
                {
                    autor = new Autor();
                    Console.WriteLine($"El Autor {autor.Nombre} no está en la BDD");
                }
            }
        }

    }
}

