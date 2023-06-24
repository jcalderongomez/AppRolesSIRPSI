using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class Usuario
    {
        [Key]
        public int UsuarioId { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(50)]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Cédula es Requerido")]
        [MaxLength(50)]
        public string Cedula { get; set; }

        [Required(ErrorMessage = "Email es Requerido")]
        [MaxLength(50)]
        public string Email { get; set; }

        [Required(ErrorMessage = "UserName es Requerido")]
        [MaxLength(50)]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Password es Requerido")]
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }
        
        [Required(ErrorMessage = "Estado es Requerido")]
        public bool Estado { get; set; }

    }
}
