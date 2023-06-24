using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Microsoft.Extensions.Configuration;

namespace Backend.AccesoDatos.Repositorio
{
    public class UnidadTrabajo : IUnidadTrabajo
    {
        private readonly ApplicationDbContext _db;
        private readonly IConfiguration _configuration;

        public ICentroApoyoRepositorio CentroApoyo { get; private set; }
        public IEmpleadoRepositorio Empleado { get; private set; }
        public IEmpresaRepositorio Empresa{ get; private set; }
        public IMinisterioRepositorio Ministerio{ get; private set; }
        public IModuloRepositorio Modulo { get; private set; }
        public IPermisoRepositorio Permiso { get; private set; }
        public IPsicologoRepositorio Psicologo { get; private set; }
        public IUsuarioRepositorio Usuario { get; private set; }
        public IRolRepositorio Rol { get; private set; }
        public IUsuarioRolRepositorio UsuarioRol { get; private set; }

        public UnidadTrabajo(ApplicationDbContext db, IConfiguration configuration)
        {
            _db = db;
            _configuration = configuration;
            CentroApoyo = new CentroApoyoRepositorio(_db);
            Empleado = new EmpleadoRepositorio(_db);
            Empresa = new EmpresaRepositorio(_db); 
            Ministerio = new MinisterioRepositorio(_db);
            Modulo = new ModuloRepositorio(_db);
            Permiso = new PermisoRepositorio(_db);
            Psicologo = new PsicologoRepositorio(_db);
            Usuario = new UsuarioRepositorio(_db,configuration);
            UsuarioRol = new UsuarioRolRepositorio(_db);
            Rol = new RolRepositorio(_db);
        }
      
        public void Dispose()
        {
            _db.Dispose();
        }

        public async Task Guardar()
        {
            await _db.SaveChangesAsync();
        }
    }
}
