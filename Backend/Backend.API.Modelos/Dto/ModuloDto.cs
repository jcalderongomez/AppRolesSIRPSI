using System.ComponentModel.DataAnnotations;

namespace Backend.API.Modelos.Dto
{
    public class ModuloDto
    {
        public int ModuloId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;

    }
}
