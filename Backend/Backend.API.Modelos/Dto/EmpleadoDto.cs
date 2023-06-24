using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class EmpleadoDto
    {
        public int EmpleadoId { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }

        public int CentroApoyoId { get; set; }

        public CentroApoyo CentroApoyo { get; set; }

    }
}
