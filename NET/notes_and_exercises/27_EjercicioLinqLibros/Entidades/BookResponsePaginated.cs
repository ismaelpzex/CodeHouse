using System;
namespace _24_EjercicioLinqLibros.Entidades
{
	public class BookResponsePaginated
	{
		public List<BookResponse> Books { get; set; }
		public int Page { get; set; }
		public int ItemsPage { get; set; }
		public int Total { get; set; }
	}
}

