namespace test.Entidades
{
    public class AlumnoExtendidoPaginado
    {
        public List<AlumnoExtendido> Resultados { get; set; }
        public int Pagina { get; set; }
        public int ElementosPorPagina { get; set; }
        public int Total { get; set; }
    }
}
