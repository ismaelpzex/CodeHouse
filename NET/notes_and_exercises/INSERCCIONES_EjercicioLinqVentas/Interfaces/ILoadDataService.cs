using _27_EjercicioLinqVentas.Entidades;

namespace _27_EjercicioLinqVentas.Interfaces
{
    public interface ILoadDataService
    {
        List<TipoProducto> ObtenerTiposProductos();
        List<Producto> ObtenerProductos();
        List<Venta> ObtenerVentas();
    }
}
