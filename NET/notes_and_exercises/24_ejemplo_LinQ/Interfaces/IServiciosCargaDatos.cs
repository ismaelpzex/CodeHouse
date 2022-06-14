using System;
using _24_ejemplo_LinQ.Classes;

namespace _24_ejemplo_LinQ.Interfaces
{
	public interface IServiciosCargaDatos
	{
		List<ClaseAnimal> CargarClasesAnimales();
		List<Gato> CargarGatos();
	}
}

