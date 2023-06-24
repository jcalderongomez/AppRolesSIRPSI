using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.Modelos
{
    public class Empresa
    {
        [Key]
        public int EmpresaId { get; set; }

        [Required(ErrorMessage = "Nombre es Requerido")]
        [MaxLength(50)]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "Nit es Requerido")]
        [MaxLength(50)]
        public string Nit { get; set; }
        
        [Required(ErrorMessage = "Estado es Requerido")]
        public bool Estado { get; set; }    

        public DateTime FechaRegistro { get; set; }
        public DateTime FechaActualizacion { get; set; }

        [Required(ErrorMessage = "Ministerio es Requerido")]
        public int MinisterioId { get; set; }

        [ForeignKey("MinisterioId")]
        public Ministerio Ministerio { get; set; }

        public DateTime FechaFundacion{ get; set; }

    }
}
