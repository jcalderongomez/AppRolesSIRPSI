using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class Rol
    {
        [Key]
        public int RolId { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(400)]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Descripción es Requerido")]
        [MaxLength(400)]
        public string Descripcion { get; set; }

        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }
    }
}
