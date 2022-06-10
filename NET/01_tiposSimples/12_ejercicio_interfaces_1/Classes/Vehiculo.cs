using System;
namespace _12_ejercicio_interfaces_1.Classes
{
	public class Vehiculo : IVehiculo
	{
        public float Deposito { set; get; }

		public Vehiculo(int litros)
		{
            Deposito = litros;
		}


        public void Conducir()
        {
            if (Deposito > 0) { Console.WriteLine("Conduciendo"); }
            else { Console.WriteLine("Tienes que repostar"); }
            
        }

        public bool Repostar(float litros)
        {
            Deposito += litros;
            return true;
        }
    }
}

