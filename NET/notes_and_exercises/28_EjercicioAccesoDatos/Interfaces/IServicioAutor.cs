using System;
using _28_EjercicioAccesoDatos.Modelos;

namespace _28_EjercicioAccesoDatos.Interfaces
{
	public interface IServicioAutor
	{
		void AñadirAutores(List<string> ListadoAutores);
		RespuestaAutoresLibrosTotal? Query1(string autor);
		void BorrarAutor(string nombre);
	}
}

