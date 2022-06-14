namespace _24_EjercicioLinqLibros.Clases
{
    public class Book
    {
        public string Title { get; set; }
        public int? AuthorId { get; set; }
        public int PublicationDate { get; set; } // Year
        public int Sales { get; set; } //Millions

        public Book(string title, int? authorId, int publicationDate, int sales)
        {
            Title = title;
            AuthorId = authorId;
            PublicationDate = publicationDate;
            Sales = sales;
        }
    }
}
