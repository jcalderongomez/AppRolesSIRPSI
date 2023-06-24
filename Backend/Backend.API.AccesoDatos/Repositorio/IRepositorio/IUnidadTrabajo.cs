using Backend.API.Modelos;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;

namespace Backend.API.AccesoDatos.Repositorio.IRepositorio
{
    public interface IUnidadTrabajo : IDisposable 
    {

        ICentroApoyoRepositorio CentroApoyo { get; }
        IEmpleadoRepositorio Empleado{ get; }

        IEmpresaRepositorio Empresa { get; }
        IMinisterioRepositorio Ministerio { get; }

        IModuloRepositorio Modulo { get; }

        IPermisoRepositorio Permiso{ get; }
        IPsicologoRepositorio Psicologo { get; }
        IRolRepositorio Rol { get; }

        IUsuarioRepositorio Usuario{ get; }

        IUsuarioRolRepositorio UsuarioRol{ get; }

        Task Guardar();
    }
}
