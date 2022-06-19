using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace test.Entidades
{
    public class Profesor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Nombre { get; set; }

        [ForeignKey("Numero")]
        public int Clase { get; set; }

 
        public int PoblacionId { get; set; }

        [Required]
        public DateTime FechaDeNacimiento { get; set; }

        public virtual Clase Numero { get; set; }

    }
}
