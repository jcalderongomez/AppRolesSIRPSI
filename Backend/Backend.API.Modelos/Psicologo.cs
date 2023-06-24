using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class Psicologo
    {
        [Key]
        public int PsicologoId { get; set; }

        [Required(ErrorMessage = "MatriculaProfesional es Requerido")]
        [MaxLength(250)]
        public string MatriculaProfesional { get; set; }

        [Required(ErrorMessage = "Especializacion es Requerido")]
        [MaxLength(250)]
        public string Especializacion { get; set; }

        [Required(ErrorMessage = "Usuario es Requerido")]
        public int UsuarioId { get; set; }

        [ForeignKey("UsuarioId")]
        public Usuario Usuario { get; set; }

        [Required(ErrorMessage = "Centro de apoyo es Requerido")]
        public int CentroApoyoId { get; set; }

        [ForeignKey("CentroApoyoId")]
        public CentroApoyo CentroApoyo { get; set; }

        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }

    }
}
