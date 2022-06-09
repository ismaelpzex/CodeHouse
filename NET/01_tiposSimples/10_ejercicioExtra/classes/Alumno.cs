
namespace _10_ejercicioExtra.classes
{
    public class Alumno : Persona
	{
		public Alumno(string name) : base(name)
		{
		}
        public override string GetName()
        {
            return base.GetName();
        }

        public void Estudiar()
        {
            Console.WriteLine($"soy {GetName()}\nEstoy estudiando porque soy de la clase Alumno\n\n");
        }
    }
}

