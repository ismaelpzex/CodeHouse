using _21_ejercicio_listas_complejas.Classes;

List<Coche> coches = new List<Coche>
{
    new Coche
    {
        Marca = "Seat",
        Combustible = "Diesel",
        NumeroPuertas = 3
    },
    new Coche
    {
        Marca = "Volkswagen",
        Combustible = "Diesel",
        NumeroPuertas = 5
    },

    new Coche
    {
        Marca = "Porsche",
        Combustible = "Gasolina",
        NumeroPuertas = 3
    },
};

List<Camion> camiones = new List<Camion>
{
    new Camion
    {
        Marca = "Iveco",
        Combustible = "Diesel",
        CargaMaxima = 9000
    },
    new Camion
    {
        Marca = "Volvo",
        Combustible = "Diesel",
        CargaMaxima = 12000
    },

};

// Añadir otro coche

coches.Add(new Coche
{
    Marca = "Skoda",
    Combustible = "gasolina",
    NumeroPuertas = 5
});

// borrar coche de la posición 2

coches.RemoveAt(2);

foreach (Coche item in coches)
{
    Console.WriteLine($"Coche");
    Console.WriteLine($"Marca: {item.Marca}");
    Console.WriteLine($"Combustible: {item.Combustible}");
    Console.WriteLine($"Puertas: {item.NumeroPuertas}");
    Console.WriteLine();
}

List<Camion> camionesNuevos = new List<Camion>
{
    new Camion
    {
        Marca = "Mercedes",
        Combustible = "Diesel",
        CargaMaxima = 9000
    },
    new Camion
    {
        Marca = "Scania",
        Combustible = "Diesel",
        CargaMaxima = 12000
    },

};

camiones.AddRange(camionesNuevos);
foreach (Camion item in camiones)
{
    Console.WriteLine("CAMION");
    Console.WriteLine($"Marca: {item.Marca}");
    Console.WriteLine($"Combustible: {item.Combustible}");
    Console.WriteLine($"Combustible: {item.CargaMaxima}");
    Console.WriteLine();
}

Console.WriteLine("----------- QUERY Coches -----------");

var numpuertas = from puertas in coches
                 where puertas.NumeroPuertas == 3
                 select puertas;


List<Coche> coches3puertas = numpuertas.ToList();


foreach (Coche item in coches3puertas)
{
    Console.WriteLine($"Coche");
    Console.WriteLine($"Marca: {item.Marca}");
    Console.WriteLine($"Combustible: {item.Combustible}");
    Console.WriteLine($"Puertas: {item.NumeroPuertas}");
    Console.WriteLine();
}

Console.WriteLine("----------- QUERY CAMIONES + 10000 -----------");

var pmacaminones = from pma in camiones
          where pma.CargaMaxima >= 10000
          select pma;

List<Camion> CamionesMax = pmacaminones.ToList();

foreach (Camion item in CamionesMax)
{
    Console.WriteLine($"Camion");
    Console.WriteLine($"Marca: {item.Marca}");
    Console.WriteLine($"Combustible: {item.Combustible}");
    Console.WriteLine($"Puertas: {item.CargaMaxima}");
    Console.WriteLine();
}

Console.WriteLine("----------- QUERY CAMIONES - 10000 -----------");

var taracamiones = (from tara in camiones
                    where tara.CargaMaxima <= 10000
                    select tara).ToList();

foreach (Camion item in taracamiones)
{
    Console.WriteLine($"Camion");
    Console.WriteLine($"Marca: {item.Marca}");
    Console.WriteLine($"Combustible: {item.Combustible}");
    Console.WriteLine($"Puertas: {item.CargaMaxima}");
    Console.WriteLine();
}