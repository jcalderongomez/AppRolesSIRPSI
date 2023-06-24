using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class UsuarioDto
    {
        public int UsuarioId { get; set; }

        public string Nombre { get; set; }

        public string Cedula { get; set; }

        public string Email { get; set; }
        public string UserName { get; set; }

        public string Password { get; set; }

        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;


        public bool Estado { get; set; }

    }
}
