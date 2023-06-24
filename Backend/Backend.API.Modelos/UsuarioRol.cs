using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class UsuarioRol
    {
        [Key]
        public int UsuarioRolId { get; set; }
        [Required(ErrorMessage = "Usuario es Requerido")]
        public int UsuarioId { get; set; }

        [ForeignKey("UsuarioId")]
        public Usuario Usuario { get; set; }

        [Required(ErrorMessage = "Rol es Requerido")]
        public int RolId { get; set; }

        [ForeignKey("RolId")]
        public Rol Rol { get; set; }

    }
}
