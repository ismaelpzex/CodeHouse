using _11_interfaces.Classes;

Moto Bandit = new Moto
{
    Marca = "Suzuki",
    Modelo = "Bandit",
    Cilindrada = 600,
    Matricula = "8231CDR",
    Potencia = 77,
    Deposito = 0,
    Capacidad = 17,
    AñoVenta = 2002, 
};

void TieneGasolina()
{
    Console.WriteLine(Bandit.TieneGasolina());
}


TieneGasolina();
Bandit.LlenarDeposito(5);
TieneGasolina();
