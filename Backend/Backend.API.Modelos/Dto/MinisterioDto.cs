namespace Backend.API.Modelos.Dto
{
    public class MinisterioDto
    {
        public int MinisterioId { get; set; }
        public string Nombre { get; set; }
        public string Nit { get; set; }
        public DateTime FechaRegistro = DateTime.Now;

        public DateTime FechaActualizacion = DateTime.Now;

    }
}
