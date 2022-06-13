using System;
namespace _22_ejercicio_listas_extra.Interfaces
{
	public interface IBook
	{
		string Name { get; set; }
		int PublicationDate { get; set; }
		IPerson Author { get; set;}
	}
}

