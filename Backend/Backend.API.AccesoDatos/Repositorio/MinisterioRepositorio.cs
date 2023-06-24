using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class MinisterioRepositorio : Repositorio<Ministerio>, IMinisterioRepositorio
    {
        private readonly ApplicationDbContext _db;

        public MinisterioRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Ministerio ministerio)
        {
           var ministerioBD = _db.Ministerios.FirstOrDefault(b => b.MinisterioId == ministerio.MinisterioId);
            if(ministerioBD !=null)
            {
                ministerioBD.Nombre= ministerio.Nombre;
                ministerioBD.Nit = ministerio.Nit;
                ministerioBD.FechaRegistro = DateTime.Now;
                ministerioBD.FechaActualizacion= DateTime.Now;
                _db.SaveChanges();
            }
        }
    }
}
