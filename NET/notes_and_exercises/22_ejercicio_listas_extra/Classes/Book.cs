
using _22_ejercicio_listas_extra.Interfaces;

namespace _22_ejercicio_listas_extra.Classes
{
	public class Book : IBook
	{
		public string Name { get; set; }
		public int PublicationDate { get; set; }
		public IPerson Author { get; set; }
		public Book(string name, int publicationDate, IPerson author)
		{
			Name = name;
			PublicationDate = publicationDate;
			Author = author;
		}
	}
}

