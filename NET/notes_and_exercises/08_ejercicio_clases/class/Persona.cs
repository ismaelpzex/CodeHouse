
namespace _08_ejercicio_clases.@class
{
	public class Persona
	{
		public string Name { get; set; }
		public string LastName { get; set; }
		public int Age { get; set; }

		public Persona(string name = "persona1", string lastName = "Apellidos1", int age = 30)
		{
			Name = name;
			LastName = lastName;
			Age = age;
		}

		public int ReturnYear()
        {
			int yearNow = DateTime.Now.Year;
			return yearNow - Age;
		}


		public void ChangeAge(int newAge)
        {
			Age = newAge;
        }
	}
}

