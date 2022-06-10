using _15_ejercicio_interfaces_3.Interfaces;

namespace _15_ejercicio_interfaces_3.Classes
{
	public class AlbunFotos : IAlbunFotos
	{
        private protected int NumPaginas;

		public AlbunFotos()
		{
			NumPaginas = 16;
		}

		public AlbunFotos(int numPaginas)
		{
			NumPaginas = numPaginas;
		}

		public int GetNumPaginas()
        {
			return NumPaginas;
		}
    }
}

