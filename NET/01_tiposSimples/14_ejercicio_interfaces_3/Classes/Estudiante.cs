
using _14_ejercicio_interfaces_3.Interfaces;

namespace _14_ejercicio_interfaces_3.Classes
{
    public class Estudiante : Persona, IEstudiante
    {
        private string Subject;

        public void SetSubject(string Subject)
        {
            Subject = Subject;
        }

        public string GetSubject()
        {
            return Subject;
        }

    }
}

