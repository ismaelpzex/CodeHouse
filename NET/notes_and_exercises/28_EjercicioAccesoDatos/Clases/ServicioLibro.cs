using System;
using _28_EjercicioAccesoDatos.Entidades;
using _28_EjercicioAccesoDatos.Interfaces;

namespace _28_EjercicioAccesoDatos.Clases
{
	public class ServicioLibro : IServicioLibro
	{
		private ApplicationDbContext _context;

		public ServicioLibro()
		{
			_context = new ApplicationDbContext();
		}


        public void InsertarLibros(List<Libro> libros)
        {
            foreach (Libro libro in libros)
            {
                Libro nuevoLibro = new Libro();
                nuevoLibro.Titulo = libro.Titulo;
                nuevoLibro.AutorId = libro.AutorId;
                _context.Add(nuevoLibro);
                _context.SaveChanges();
            }
        }

        public void BorrarLibro(string nombre)
        {
            Libro? libro = _context.Libros.Where(b => b.Titulo == nombre).FirstOrDefault();

            if (libro != null)
            {
                _context.Libros.Remove(libro);
                _context.SaveChanges();
                Console.WriteLine($"El libro {libro.Titulo} se ha borrado correctamente");
            }
            else
            {
                libro = new Libro();
                Console.WriteLine($"El Título {libro.Titulo} no está en la BDD");
            }
        }

        public void ModificarLibro(string tituloLibro, string tituloModificado)
        {
            Libro? libro = _context.Libros.Where(l => l.Titulo == tituloLibro).First();

            if (libro != null)
            {
                libro.Titulo = tituloModificado;
                _context.Libros.Update(libro);
                _context.SaveChanges();
            } else
            {
                libro = new Libro();
                Console.WriteLine($"El titulo {libro.Titulo} no está en la BDD");
            }
        }



        void IServicioLibro.BorrarLibrosAutor(Autor autor)
        {
            List<Libro> Libros = new List<Libro>();

            Libros = _context.Libros.Where(b => b.AutorId == autor.Id).ToList();

            _context.Libros.RemoveRange(Libros);
            _context.SaveChanges();
        }
    }
}


