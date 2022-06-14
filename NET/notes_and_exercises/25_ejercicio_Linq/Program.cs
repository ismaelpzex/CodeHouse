using _25_ejercicio_Linq.Classes;

List<Book> Books = Book.Books();
List<Author> Authors = Author.Books();

// LOS 3 LIBROS MÁS VENDIDOS

var queryMostSales = from b in Books
                     orderby b.Sales descending
                     select b;

List<Book> resultQueryMostSales = queryMostSales.ToList();

Console.WriteLine("\nLos 3 libros más vendidos");
foreach (Book book in resultQueryMostSales.Take(3))
{
    Console.WriteLine(book.Title);
}


//LOS 3 LIBROS MENOS VENDIDOS
var queryLessSales = from b in Books
                     orderby b.Sales ascending
                     select b;

List<Book> resultQueryLessSales = queryLessSales.ToList();
Console.WriteLine("\nLos 3 libros menos vendidos");
foreach (Book book in resultQueryLessSales)
{
    Console.WriteLine(book.Title);
}

// EL AUTOR CON MÁS PUBLICACIONES

var queryAuthorMorePublications = from b in Books
                                  join a in Authors on b.AuthorId equals a.AuthorId
                                  orderby b.AuthorId descending
                                  where b.AuthorId.Count()
                                  select new Author(a.AuthorId, a.Name);
                      



List<Author> resultQueryAuthorMorePublications =  queryAuthorMorePublications.ToList();
foreach (Author item in resultQueryAuthorMorePublications)
{
    Console.WriteLine(item.Name.Count()) ;
 }