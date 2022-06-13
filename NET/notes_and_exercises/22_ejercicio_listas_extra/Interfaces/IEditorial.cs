using System;
namespace _22_ejercicio_listas_extra.Interfaces
{
	public interface IEditorial
	{
		public string Name { get; set; }
		public List<IBook> Books { get; set; }
		public void getBooks();
	}
}

