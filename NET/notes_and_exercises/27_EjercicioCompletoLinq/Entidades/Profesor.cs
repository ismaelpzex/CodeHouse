
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Profesor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Nombre { get; set; }

        [ForeignKey("Numero")]
        public int Clase { get; set; }

        [ForeignKey("Poblacion")]
        public int PoblacionId { get; set; }

        [Required]
        public DateTime FechaDeNacimiento { get; set; }

        public Clase Numero { get; set; }
        public Poblacion Poblacion { get; set; }
    }
