using EjercicioLinqVentas.Entidades;

namespace EjercicioLinqVentas.Interfaces
{
    public interface ILoadDataService
    {
        List<TipoProducto> ObtenerTiposProductos();
        List<Producto> ObtenerProductos();
        List<Venta> ObtenerVentas();
    }
}
