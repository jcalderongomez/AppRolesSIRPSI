using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class Permiso
    {
        [Key]
        public int PermisoId { get; set; }

        public bool Ver { get; set; }
        public bool Editar{ get; set; }
        public bool Consultar { get; set; }
        public bool Eliminar{ get; set; }
        public bool Estado { get; set; }
        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }

        [Required(ErrorMessage = "Rol es Requerido")]
        public int RolId { get; set; }

        [ForeignKey("RolId ")]
        public Rol Rol { get; set; }

        [Required(ErrorMessage = "Modulo es Requerido")]
        public int ModuloId { get; set; }

        [ForeignKey("ModuloId")]
        public Modulo Modulo { get; set; }

    }
}
