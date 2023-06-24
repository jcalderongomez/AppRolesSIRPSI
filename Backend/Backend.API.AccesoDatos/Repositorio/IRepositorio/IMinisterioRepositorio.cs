using Backend.API.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.AccesoDatos.Repositorio.IRepositorio
{
    public interface IMinisterioRepositorio : IRepositorio<Ministerio>
    {
        void Actualizar(Ministerio ministerio) {
            ministerio.FechaActualizacion = DateTime.Now;
        }

    }
}
