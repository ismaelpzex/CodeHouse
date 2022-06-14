using _26_EjercicioCompletoLinq.Clases;
using _26_EjercicioCompletoLinq.Entidades;
using _26_EjercicioCompletoLinq.Interfaces;

    public class Alumno
    {
        public string Nombre { get; set; }
        public DateTime FechaDeNacimiento { get; set; }
        public List<int> Notas { get; set; }
        public int Clase { get; set; }
    }

