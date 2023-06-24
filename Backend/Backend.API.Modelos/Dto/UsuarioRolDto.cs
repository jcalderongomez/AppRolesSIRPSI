using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class UsuarioRolDto
    {

        public int UsuarioRolId { get; set; }
        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }

        public int RolId { get; set; }

        public RolDto Rol { get; set; }

    }
}
