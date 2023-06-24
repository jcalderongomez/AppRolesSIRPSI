using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class CentroApoyoDto
    {
        public int CentroApoyoId { get; set; }

        public string Nombre { get; set; }

        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;


        public int EmpresaId { get; set; }
        public Empresa Empresa { get; set; }
    }
}
