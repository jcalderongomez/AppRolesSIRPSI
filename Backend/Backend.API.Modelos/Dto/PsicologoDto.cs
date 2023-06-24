using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos.Dto
{
    public class PsicologoDto
    {

        public int PsicologoId { get; set; }

        public string MatriculaProfesional { get; set; }

        public string Especializacion { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }
        public int CentroApoyoId { get; set; }

        public CentroApoyo CentroApoyo { get; set; }

        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;


    }
}
