using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class PermisoDto
    {

        public int PermisoId { get; set; }

        public bool Ver { get; set; }
        public bool Editar{ get; set; }
        public bool Consultar { get; set; }
        public bool Eliminar{ get; set; }
        public bool Estado { get; set; }
        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;


        public int RolId { get; set; }

        public Modelos.Rol Rol { get; set; }

        public int ModuloId { get; set; }

        public Modulo Modulo { get; set; }

    }
}
