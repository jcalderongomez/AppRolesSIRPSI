using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class CentroApoyoRepositorio : Repositorio<CentroApoyo>, ICentroApoyoRepositorio
    {
        private readonly ApplicationDbContext _db;

        public CentroApoyoRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(CentroApoyo centroApoyo)
        {
           var centroApoyoBD = _db.Empresas.FirstOrDefault(b => b.EmpresaId == centroApoyo.EmpresaId);
            if(centroApoyoBD !=null)
            {
                centroApoyoBD.Nombre= centroApoyo.Nombre;
                centroApoyoBD.EmpresaId= centroApoyo.EmpresaId;
                centroApoyoBD.FechaRegistro = DateTime.Now;
                centroApoyoBD.FechaActualizacion= DateTime.Now;
                _db.SaveChanges();
            }
        }
    }
}
