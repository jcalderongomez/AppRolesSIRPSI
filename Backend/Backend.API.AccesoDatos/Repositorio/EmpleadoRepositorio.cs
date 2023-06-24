using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class EmpleadoRepositorio : Repositorio<Empleado>, IEmpleadoRepositorio
    {
        private readonly ApplicationDbContext _db;

        public EmpleadoRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Empleado empleado)
        {
           var empleadoBD = _db.Empleados.FirstOrDefault(b => b.EmpleadoId == empleado.EmpleadoId);
            if(empleadoBD !=null)
            {
                empleadoBD.EmpleadoId = empleado.EmpleadoId;
                empleadoBD.UsuarioId = empleado.UsuarioId;
                empleadoBD.CentroApoyoId= empleado.CentroApoyoId;
                _db.SaveChanges();
            }
        }
    }
}
