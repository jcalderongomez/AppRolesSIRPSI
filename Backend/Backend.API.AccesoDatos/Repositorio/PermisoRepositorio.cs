using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class PermisoRepositorio : Repositorio<Permiso>, IPermisoRepositorio
    {
        private readonly ApplicationDbContext _db;

        public PermisoRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Permiso permiso)
        {
           var permisoBD = _db.Permisos.FirstOrDefault(b => b.PermisoId == permiso.PermisoId);
            if(permisoBD !=null)
            {
                permisoBD.Ver= permiso.Ver;
                permisoBD.Editar= permiso.Editar;
                permisoBD.Consultar= permiso.Consultar;
                permisoBD.Eliminar= permiso.Eliminar;
                permisoBD.Estado= permiso.Estado;
                permisoBD.FechaRegistro = DateTime.Now;
                permisoBD.FechaActualizacion= DateTime.Now;
                permisoBD.RolId= permiso.RolId;
                permisoBD.ModuloId= permiso.ModuloId;
                _db.SaveChanges();
            }
        }
    }
}
