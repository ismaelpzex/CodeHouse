using _24_EjercicioLinqLibros.Clases;
using _24_EjercicioLinqLibros.Entidades;

namespace _24_EjercicioLinqLibros.Interfaces
{
    public interface IDataService
    {
        public List<Book> GetTop3BooksMaxSales();
        public List<Book> GetTop3MinSales();
        public List<Book> GetBooks50Year();
        public Book GetOldBook();
        public List<Author> GetAuthors(string? bookTitleFilter = null);
        //public List<AuthorResponse> GethAuthorsAndBooksPublished();
        //public AuthorResponse getAuthorBestPublised();
        public List<BookResponse> GetBooksJoinAuthor();
        public List<BookResponse> GetBooksLeftJoinAuthor();
        public BookResponsePaginated GetBooksLeftJoinAuthorPaginated(int page, int itemsPerPage);
    }
}
