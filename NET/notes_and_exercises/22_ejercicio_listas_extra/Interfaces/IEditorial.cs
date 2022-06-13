using System;
namespace _22_ejercicio_listas_extra.Interfaces
{
	public interface IEditorial
	{
		string Name { get; set; }
		List<IBook> Books { get; set; }
		void getBooks();
	}
}

