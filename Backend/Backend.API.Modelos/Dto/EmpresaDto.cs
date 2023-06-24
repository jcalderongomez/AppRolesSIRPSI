using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class EmpresaDto
    {
        public int EmpresaId { get; set; }

        public string Nombre { get; set; }

        public string Nit { get; set; }
        
        public bool Estado { get; set; }

        public DateTime FechaRegistro = DateTime.Now;
        public DateTime FechaActualizacion = DateTime.Now;

        public int MinisterioId { get; set; }

        public Ministerio Ministerio { get; set; }

        public DateTime FechaFundacion = DateTime.Now;


    }
}
