using _15_ejercicio_interfaces_3.Classes;


AlbunFotos Albun16 = new AlbunFotos();
AlbunFotos Albun24 = new AlbunFotos(24);
AlbunFotos AlbunGrande = new SuperAlbunFotos();

AlbunFotos[] arrayAlbun = { Albun16, Albun24, AlbunGrande };


foreach (AlbunFotos Albun in arrayAlbun)
{
    //if (Albun is AlbunFotos) Console.WriteLine((Albun as AlbunFotos).GetNumPaginas());
    //else if (Albun is SuperAlbunFotos) Console.WriteLine((Albun as SuperAlbunFotos).GetNumPaginas());
    Console.WriteLine(Albun.GetNumPaginas());
};