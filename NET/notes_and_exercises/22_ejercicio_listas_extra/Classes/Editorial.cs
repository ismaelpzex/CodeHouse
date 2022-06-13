
using _22_ejercicio_listas_extra.Interfaces;

namespace _22_ejercicio_listas_extra.Classes
{
	public class Editorial : IEditorial
	{
		public string Name { get; set; }
		public List<IBook> Books { get; set; }
		public Editorial(string name, List<IBook> books)
		{
			Name = name;
			Books = books;

		}

		public void getBooks()
		{
			foreach (Book libro in Books)
			{
				Console.WriteLine($"Editorial {Name}");
				Console.WriteLine($"Título: {libro.Name}");
				Console.WriteLine($"Fecha publicación: {libro.PublicationDate}");
				Console.WriteLine($"Autor: {libro.Author.Name} {libro.Author.LastName}");
				Console.WriteLine($"Edad: {libro.Author.Age}");
				Console.WriteLine($"Fecha nacimiento: {DateTime.Now.Year - libro.Author.Age}\n");
			}

		}
    }
}

