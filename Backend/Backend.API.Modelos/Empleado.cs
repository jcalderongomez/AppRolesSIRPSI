using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class Empleado
    {
        [Key]
        public int EmpleadoId { get; set; }

        [Required(ErrorMessage = "Usuario es Requerido")]
        public int UsuarioId { get; set; }

        [ForeignKey("UsuarioId")]
        public Usuario Usuario { get; set; }

        [Required(ErrorMessage = "Usuario es Requerido")]
        public int CentroApoyoId { get; set; }

        [ForeignKey("CentroApoyoId")]
        public CentroApoyo CentroApoyo { get; set; }

    }
}
