namespace EjercicioCompletoLinq.Entidades
{
    public class Alumno
    {
        public string Nombre { get; set; }
        public DateTime FechaDeNacimiento { get; set; }
        public List<int> Notas { get; set; }
        public int Clase { get; set; }
        public int PoblacionId { get; set; }
    }
}
