namespace _07_clases_y_objetos.clases
{
    public class Vivienda
	{
		public int Meters { get; set; }
		public string Address { get; set; }
		public bool Pool { get; set; }
		public string Onwer { get; set; }

		public Vivienda(int meters, string address)
		{
			Meters = meters;
			Address = address;
		}

		public bool isVpo()
        {
			return Meters <= 90;
        }

		public void Reform(int meters)
        {
			Meters += meters;
        }

		private bool HasOnwer()
        {
			return !string.IsNullOrEmpty(Onwer);
        }
	}
}

