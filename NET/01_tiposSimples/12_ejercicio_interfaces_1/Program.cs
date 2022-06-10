using _12_ejercicio_interfaces_1.Classes;

Vehiculo Leon = new Vehiculo(0);

float importe;
Console.WriteLine("Inserte importe en €");
float.TryParse(Console.ReadLine(), out importe);
float precioGasoil = 1.89F;
float repostar = importe / precioGasoil;
float consumo;
Console.WriteLine("Indica el consumo medio de tu vehículo");
float.TryParse(Console.ReadLine(), out consumo);
 Leon.Repostar(repostar);
Leon.Conducir();
float coste = (float)repostar * (float)precioGasoil;
float km = (float)repostar * 100.0F / (float)consumo;
Console.WriteLine($"Has repostado {Math.Round(repostar, 3)} L");
Console.WriteLine($"Podrás hacer {Math.Round(km, 3)}km aprox.");