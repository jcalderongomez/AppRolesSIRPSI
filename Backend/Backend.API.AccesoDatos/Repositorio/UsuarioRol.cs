using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class UsuarioRolRepositorio : Repositorio<UsuarioRol>, IUsuarioRolRepositorio
    {
        private readonly ApplicationDbContext _db;

        public UsuarioRolRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(UsuarioRol usuarioRol)
        {
            var usuarioRolBD = _db.UsuarioRoles.FirstOrDefault(b => b.UsuarioRolId == usuarioRol.UsuarioRolId);
            if (usuarioRolBD != null)
            {

                usuarioRolBD.UsuarioId= usuarioRol.UsuarioId;
                usuarioRolBD.RolId= usuarioRol.RolId;
                _db.SaveChanges();
            }
        }
    }
}
