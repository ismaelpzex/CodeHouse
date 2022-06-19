using System;
using _28_EjercicioAccesoDatos.Entidades;

namespace _28_EjercicioAccesoDatos.Interfaces
{
	public interface IServicioLibro
	{
		void InsertarLibros(List<Libro> libros);
		public void BorrarLibro(string nombre);
		public void ModificarLibro(string tituloLibro, string tituloModificado);
		protected internal void BorrarLibrosAutor(Autor autor);
	}
}

