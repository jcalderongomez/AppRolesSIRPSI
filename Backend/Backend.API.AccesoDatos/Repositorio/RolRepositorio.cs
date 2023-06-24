using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class RolRepositorio : Repositorio<Rol>, IRolRepositorio
    {
        private readonly ApplicationDbContext _db;

        public RolRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Rol rol)
        {
           var rolBD = _db.Roles.FirstOrDefault(b => b.RolId == rol.RolId);
            if(rolBD !=null)
            {
                rolBD.Nombre= rol.Nombre;
                rolBD.Descripcion= rol.Descripcion;
                rolBD.FechaRegistro = DateTime.Now;
                rolBD.FechaActualizacion= DateTime.Now;
                _db.SaveChanges();
            }
        }
    }
}
