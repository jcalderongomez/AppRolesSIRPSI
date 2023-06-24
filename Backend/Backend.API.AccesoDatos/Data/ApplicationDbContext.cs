
using Backend.API.Modelos;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Backend.API.AccesoDatos.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        
        public DbSet<CentroApoyo> CentroApoyos { get; set; }
        public DbSet<Empresa> Empresas { get; set; }
        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<Ministerio> Ministerios { get; set; }
        public DbSet<Modulo> Modulos{ get; set; }
        public DbSet<Permiso> Permisos { get; set; }
        public DbSet<Psicologo> Psicologos { get; set; }
        public DbSet<Rol> Roles { get; set; }
        public DbSet<Usuario> Usuarios{ get; set; }
        public DbSet<UsuarioRol> UsuarioRoles { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}