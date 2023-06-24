using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class RolDto
    {
        
        public int RolId { get; set; }

        public string Nombre { get; set; }

        public string Descripcion { get; set; }

        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;

    }
}
