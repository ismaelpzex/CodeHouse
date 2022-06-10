using _14_ejercicio_interfaces_3.Interfaces;

namespace _14_ejercicio_interfaces_3.Classes
{
	public class Persona : IPersona
	{


        private string Name;
        private int Age;

        public void SetName(string name)
        {
            Name = name;
        }
        public string GetName()
        {
            return Name;
        }
        public void SetAge(int age)
        {
            Age = age;
        }
        public int GetBornAge()
        {
            int BornAge = DateTime.Now.Year - Age;
            return BornAge;
        }



    }
}

