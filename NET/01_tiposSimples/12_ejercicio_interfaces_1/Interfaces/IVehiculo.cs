
namespace _12_ejercicio_interfaces_1.Classes
{
	public interface IVehiculo
	{
		float Deposito { get; set; }

		void Conducir();
		bool Repostar(float litros);   
	}
}

