
namespace _11_interfaces.Interfaces
{
	public interface IMoto
	{
		string Marca { get; set; }
		string Modelo { get; set; }
		int Cilindrada { get; set; }
		string Matricula { get; set; }
		int Potencia { get; set; }
		int Deposito { get; set; }
		int Capacidad { get; set; }
		int AñoVenta { get; set; }
		int Años { get; set; }

		void CambiarPotencia(int potencia);
		void LlenarDeposito(int litros);
		string TieneGasolina();
	}
}

