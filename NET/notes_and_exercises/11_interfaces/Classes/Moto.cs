
using _11_interfaces.Interfaces;

namespace _11_interfaces.Classes
{
    public class Moto : IMoto
    {
        public Moto()
        {
            Años = DateTime.Now.Year - AñoVenta;
        }
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public int Cilindrada { get; set; }
        public string Matricula { get; set; }
        public int Potencia { get; set; }
        public int Deposito { get; set; }
        public int Capacidad { get; set; }
        public int AñoVenta { get; set; }
        public int Años { get; set; }

        public void CambiarPotencia(int potencia)
        {
            Potencia = potencia; 
        }

        public void LlenarDeposito(int litros)
        {
            if (litros + Deposito > Capacidad) {
                Console.WriteLine($"{litros}L son demasiados, solo entran {Capacidad - Deposito}L");
            } else if (litros + Deposito < Capacidad)
            {
                Deposito += litros;
                Console.WriteLine($"Has repostado {litros}L, Aún puedes repostar {Capacidad - Deposito}L más");
            } else if (litros + Deposito == Capacidad)
            {
                Deposito += litros;
                Console.WriteLine("El depósito está lleno");
            }
        }

        public string TieneGasolina()
        {
            return Deposito == 0 ? "No" : "Si";
        }
    }
}

