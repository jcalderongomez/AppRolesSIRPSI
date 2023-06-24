using Backend.API.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.AccesoDatos.Repositorio.IRepositorio
{
    public interface IEmpresaRepositorio: IRepositorio<Empresa>
    {
        void Actualizar(Empresa empresa) { 
            empresa.FechaActualizacion= DateTime.Now;
        }
    }
}
