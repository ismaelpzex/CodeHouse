

using _15_ejercicio_interfaces_3.Interfaces;

namespace _15_ejercicio_interfaces_3.Classes
{
	public class SuperAlbunFotos : AlbunFotos, ISuperAlbunFotos
	{
        public SuperAlbunFotos()
        {
            NumPaginas = 64;
        }
    }
}


