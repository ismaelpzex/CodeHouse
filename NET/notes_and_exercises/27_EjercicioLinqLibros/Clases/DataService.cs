using _24_EjercicioLinqLibros.Entidades;
using _24_EjercicioLinqLibros.Interfaces;

namespace _24_EjercicioLinqLibros.Clases
{
    public class DataService : IDataService
    {
        private List<Book> _ContextBookList;
        private List<Author> _ContextAuthorList;
        private ApplicationDbContext _Context;
        public DataService()
        {
            _Context = new ApplicationDbContext();
            //ILoadService loadService = new LoadService();

            //_ContextBookList = loadService.LoadBooks();
            //_ContextAuthorList = loadService.LoadAuthors();
        }

        public List<Book> GetTop3BooksMaxSales()
        {
            var query = from b in _Context.Books
                        orderby b.Sales descending
                        select b;

            return query.Take(3).ToList();
        }

        public List<Book> GetTop3MinSales()
        {
            var query = from b in _Context.Books
                        orderby b.Sales ascending
                        select b;

            return query.Take(3).OrderByDescending(b => b.Sales).ToList(); // ordenamos el resultado de forma descendente con landa
        }

        public List<Book> GetBooks50Year()
        {
            var query = from b in _Context.Books
                        where b.PublicationDate >= (DateTime.Now.Year - 50)
                        select b;

            return query.ToList();
        }

        public Book GetOldBook()
        {
            var query = from b in _Context.Books
                        orderby b.PublicationDate ascending
                        select b;

            return query.First();
        }

        public List<Author> GetAuthors(string? bookTitleFilter = null)
        {
            var query = from a in _Context.Authors
                        join b in _Context.Books on a.AuthorId equals b.AuthorId
                        where string.IsNullOrEmpty(bookTitleFilter) || b.Title.StartsWith(bookTitleFilter)
                        select a;

            return query.Distinct().ToList(); // si hay algún autor repetido, con el Distinct solo lo sacará una vez
        }

        //public List<AuthorResponse> GethAuthorsAndBooksPublished()
        //{
        //    var query = from b in _Context.Books
        //                group b by b.AuthorId into idGroup
        //                join a in _Context.Authors on idGroup.Key equals a.AuthorId
        //                select new AuthorResponse
        //                {
        //                    AuthorName = a.Name,
        //                    BookPublished = idGroup.Count(),
        //                };

        //    //var query = from a in AuthorList
        //    //            select new AuthorResponse
        //    //            {
        //    //                AuthorName = a.Name,
        //    //                BookPublished = (from b in BookList
        //    //                                 where b.AuthorId == a.AuthorId
        //    //                                 select b).Count()

        //    //BookPublished = BookList.Where(b => b.AuthorId == a.AuthorId).Count()

        ////};

        //    return query.ToList();
        //}

        //public AuthorResponse getAuthorBestPublised()
        //{
        //    List<AuthorResponse> authors = GethAuthorsAndBooksPublished();
        //    var query = from a in authors
        //                orderby a.BookPublished descending
        //                select a;

        //    return query.First();
        //}

        public List<BookResponse> GetBooksJoinAuthor()
        {
            var query = from b in _Context.Books
                        join a in _Context.Authors on b.AuthorId equals a.AuthorId
                        select new BookResponse
                        {
                            AuthorName = a.Name,
                            BookTitle = b.Title,
                        };
            return query.ToList();
        }

        public List<BookResponse> GetBooksLeftJoinAuthor()
        {
            var query = from b in _Context.Books
                        join a in _Context.Authors on b.AuthorId equals a.AuthorId into authorBooks
                        from c in authorBooks.DefaultIfEmpty()
                        select new BookResponse
                        {
                            AuthorName = c == null ? "Anónimo" : c.Name,
                            BookTitle = b.Title,
                        };

            return query.ToList();
        }

        public BookResponsePaginated GetBooksLeftJoinAuthorPaginated( int page, int itemsPerPage)
        {
            BookResponsePaginated result = new BookResponsePaginated();

            var query = from b in _Context.Books
                        join a in _Context.Authors on b.AuthorId equals a.AuthorId into authorBooks
                        from c in authorBooks.DefaultIfEmpty()
                        select new BookResponse
                        {
                            AuthorName = c == null ? "Anónimo" : c.Name,
                            BookTitle = b.Title,
                        };

            result.Total = query.Count();
            result.Page = page;
            result.ItemsPage = itemsPerPage;
            // calculo para la paginación, pagina - 1 multiplicado por items por pagina.
            result.Books = query.Skip((page -1) * itemsPerPage).Take(itemsPerPage).ToList();

            return result;

        }
    }
}
