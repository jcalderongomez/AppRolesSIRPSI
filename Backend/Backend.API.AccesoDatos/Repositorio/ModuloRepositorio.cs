using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.AccesoDatos.Repositorio
{
    public class ModuloRepositorio : Repositorio<Modulo>, IModuloRepositorio
    {
        private readonly ApplicationDbContext _db;

        public ModuloRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Modulo modulo)
        {
           var moduloBD = _db.Modulos.FirstOrDefault(b => b.ModuloId == modulo.ModuloId);
            if(moduloBD !=null)
            {
                moduloBD.Nombre= modulo.Nombre;
                moduloBD.Descripcion = modulo.Descripcion;
                moduloBD.FechaRegistro = DateTime.Now;
                moduloBD.FechaActualizacion= DateTime.Now;
                _db.SaveChanges();
            }
        }
    }
}
