namespace _10_ejercicioExtra.classes
{
	public class Profesor : Persona
	{

        public Profesor(string name) : base(name)
        {
        }
        public override string GetName()
        {
            return base.GetName();
        }

        public void Explicar()
        {
            Console.WriteLine($"Soy {GetName()}\nEstoy explicando porque soy de la clase Profesor\n\n");
        }                                                                                                  
    }
}

