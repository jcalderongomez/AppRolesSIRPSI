using System.ComponentModel.DataAnnotations;

namespace Backend.API.Modelos
{
    public class Ministerio
    {
        [Key]
        public int MinisterioId { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(50)]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Nit es Requerido")]
        [MaxLength(50)]
        public string Nit { get; set; }

        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }
    }
}
