using _24_EjercicioLinqLibros.Clases;

namespace _24_EjercicioLinqLibros.Interfaces
{
    public interface ILoadService
    {
        List<Author> LoadAuthors();
        List<Book> LoadBooks();
    }


}
