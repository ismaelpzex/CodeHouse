using _07_clases_y_objetos.clases;

Vivienda nuevaVivienda = new Vivienda
{
    Meters = 90,
    Address = "Calle test, Jaén"
};

Console.WriteLine($"La dirección de la vivienda es: {nuevaVivienda.Address}");
Console.WriteLine($"Los metros de la vivienda son: {nuevaVivienda.Meters}");

if (nuevaVivienda.isVpo())
    Console.WriteLine("La vivienda es VPO");
else
    Console.WriteLine("La vivienda no es VPO");

nuevaVivienda.Reform(90);

if (nuevaVivienda.isVpo())
    Console.WriteLine("La vivienda es VPO");
else
    Console.WriteLine("La vivienda no es VPO");



Piso NuevoPiso = new Piso
{
    Meters = 110,
    Address = "Fuente del Peral",
    Pool = false,
    Floor = 5
};

Console.WriteLine(NuevoPiso.HasOnwer());
NuevoPiso.newOnwer("Ismael");
Console.WriteLine(NuevoPiso.HasOnwer());

