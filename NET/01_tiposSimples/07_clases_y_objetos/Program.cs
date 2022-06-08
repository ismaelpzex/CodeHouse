using viviendas.clases;
using cocheras.clases;

Vivienda nuevaVivienda = new Vivienda(90, "Calle test, Jaén");

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

cocheras