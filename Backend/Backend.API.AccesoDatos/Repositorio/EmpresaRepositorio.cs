using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class EmpresaRepositorio : Repositorio<Empresa>, IEmpresaRepositorio
    {
        private readonly ApplicationDbContext _db;

        public EmpresaRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Empresa empresa)
        {
           var empresaBD = _db.Empresas.FirstOrDefault(b => b.EmpresaId == empresa.EmpresaId);
            if(empresaBD !=null)
            {
                empresaBD.Nombre= empresa.Nombre;
                empresaBD.Nit = empresa.Nit;
                empresaBD.Estado = empresa.Estado;
                empresaBD.FechaRegistro = DateTime.Now;
                empresaBD.FechaActualizacion= DateTime.Now;
                empresaBD.MinisterioId = empresa.MinisterioId;
                empresaBD.FechaFundacion = DateTime.Now;
                _db.SaveChanges();
            }
        }
    }
}
