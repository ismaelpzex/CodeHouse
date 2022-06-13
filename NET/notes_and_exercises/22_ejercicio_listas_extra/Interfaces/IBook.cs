using System;
namespace _22_ejercicio_listas_extra.Interfaces
{
	public interface IBook
	{
		public string Name { get; set; }
		public int PublicationDate { get; set; }
		public IPerson Author { get; set;}
	}
}

