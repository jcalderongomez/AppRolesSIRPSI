using System.ComponentModel.DataAnnotations;

namespace Backend.API.Modelos
{
    public class Modulo
    {
        [Key]
        public int ModuloId { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(50)]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Descripción es Requerido")]
        [MaxLength(50)]
        public string Descripcion { get; set; }
        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }

    }
}
