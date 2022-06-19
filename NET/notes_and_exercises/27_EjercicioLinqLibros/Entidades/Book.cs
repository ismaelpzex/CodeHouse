using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _24_EjercicioLinqLibros.Clases
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(250)]
        public string Title { get; set; }

        [ForeignKey("Authors")]
        public int? AuthorId { get; set; }

        [Timestamp]
        [Required]
        public int PublicationDate { get; set; } // Year
        [Required]
        public int Sales { get; set; } //Millions

        public virtual Author Authors { get; set; }

        public Book(string title, int? authorId, int publicationDate, int sales)
        {
            Title = title;
            AuthorId = authorId;
            PublicationDate = publicationDate;
            Sales = sales;
        }
    }
}
