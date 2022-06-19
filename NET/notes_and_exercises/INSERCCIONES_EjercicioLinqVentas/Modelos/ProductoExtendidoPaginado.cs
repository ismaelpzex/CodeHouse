namespace _27_EjercicioLinqVentas.Modelos
{
    public class ProductoExtendidoPaginado
    {
        public List<ProductoExtendido> Resultados { get; set; }
        public int Total { get; set; }
        public int Pagina { get; set; }
        public int ElementosPorPagina { get; set; }
    }
}
