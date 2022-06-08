namespace _07_clases_y_objetos.clases
{
    public class Vivienda
	{
		public int Meters { get; set; }
		public string Address { get; set; }
		public bool Pool { get; set; }
		private string Onwer { get; set; }

		public bool isVpo()
        {
			return Meters <= 90;
        }

		public void Reform(int meters)
        {
			Meters += meters;
        }

		public bool HasOnwer()
        {
			return !string.IsNullOrEmpty(Onwer);
        }

		public void newOnwer(string newOnwer)
        {
			Onwer = newOnwer;
        }
	}
}

