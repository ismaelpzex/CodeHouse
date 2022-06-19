using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace test.Entidades
{
    public class Alumno
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Nombre { get; set; }

        [Required]
        public DateTime FechaDeNacimiento { get; set; }

        [ForeignKey("IdPoblacion")]
        public int PoblacionId { get; set; }

        public List<int> Notas { get; set; }
      
        public int Clase { get; set; }

        public Poblacion IdPoblacion { get; set; }


    }
}
