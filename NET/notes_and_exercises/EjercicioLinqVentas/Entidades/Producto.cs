namespace EjercicioLinqVentas.Entidades
{
    public class Producto
    {
        public int Id { get; set; }
        public int TipoProductoId { get; set; }
        public string Descripcion { get; set; }
        public double PrecioUnitario { get; set; }
    }
}
