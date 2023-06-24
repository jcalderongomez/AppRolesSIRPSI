using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio.IRepositorio
{
    public interface IModuloRepositorio: IRepositorio<Modulo>
    {
        void Actualizar(Modulo modulo) { 
            modulo.FechaActualizacion = DateTime.Now;
        }

    }
}
