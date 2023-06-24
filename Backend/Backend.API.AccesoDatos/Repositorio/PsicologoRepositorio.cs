using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class PsicologoRepositorio : Repositorio<Psicologo>, IPsicologoRepositorio
    {
        private readonly ApplicationDbContext _db;

        public PsicologoRepositorio(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Actualizar(Psicologo psicologo)
        {
            var psicologoBD = _db.Psicologos.FirstOrDefault(b => b.PsicologoId == psicologo.PsicologoId);
            if (psicologoBD != null)
            {
                psicologoBD.MatriculaProfesional = psicologo.MatriculaProfesional;
                psicologoBD.Especializacion = psicologo.Especializacion;
                psicologoBD.UsuarioId = psicologo.UsuarioId;
                psicologoBD.CentroApoyoId = psicologo.CentroApoyoId;
                psicologoBD.FechaRegistro = DateTime.Now;
                psicologoBD.FechaActualizacion = DateTime.Now;
                _db.SaveChanges();
            }
        }
    }
}
