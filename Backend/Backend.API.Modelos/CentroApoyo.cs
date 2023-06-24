using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class CentroApoyo
    {
        [Key]
        public int CentroApoyoId { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(50)]
        public string Nombre { get; set; }

        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }

        [Required(ErrorMessage = "Empresa es Requerida")]
        public int EmpresaId { get; set; }

        [ForeignKey("EmpresaId")]
        public Empresa Empresa { get; set; }
    }
}
