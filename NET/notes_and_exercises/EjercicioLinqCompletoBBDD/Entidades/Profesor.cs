using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EjercicioLinqCompletoBBDD.Entidades
{
    public class Profesor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Nombre { get; set; }

        [ForeignKey("Clase")]
        public int ClaseId { get; set; }

        public virtual Clase Clase { get; set; } // ESTA PROPIEDAD APUNTA A LA TABLA DE CLASES

        [ForeignKey("Poblacion")]
        public int PoblacionId { get; set; }

        public virtual Poblacion Poblacion { get; set; } // ESTA PROPIEDAD APUNTA A LA TABLA DE POBLACION

        [Required]
        public DateTime FechaDeNacimiento { get; set; }
    }
}
