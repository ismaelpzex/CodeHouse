using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EjercicioLinqCompletoBBDD.Entidades
{
    public class Alumno
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Nombre { get; set; }

        [Required]
        public DateTime FechaDeNacimiento { get; set; }

        [ForeignKey("Poblacion")]
        public int PoblacionId { get; set; }

        public virtual Poblacion Poblacion { get; set; }   // ESTA PROPIEDAD APUNTA A LA TABLA DE Poblaciones

        public virtual List<Nota> Notas { get; set; }     // Emtity framework resuelve la FK de la lista NOTAS hacia ALUMNO

    }
}
