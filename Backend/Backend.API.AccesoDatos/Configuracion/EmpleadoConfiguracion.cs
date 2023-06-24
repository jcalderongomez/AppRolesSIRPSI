using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Backend.API.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.AccesoDatos.Configuracion
{
    public class EmpleadoConfiguracion : IEntityTypeConfiguration<Empleado>
    {
        public void Configure(EntityTypeBuilder<Empleado> builder)
        {
            builder.Property(x => x.EmpleadoId).IsRequired();
            builder.Property(x =>x.UsuarioId).IsRequired();
            builder.Property(x =>x.CentroApoyoId).IsRequired();

            //Relaciones 

            builder.HasOne(x => x.Usuario).WithMany()
                   .HasForeignKey(x => x.UsuarioId)
                   .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(x => x.CentroApoyo).WithMany()
                   .HasForeignKey(x => x.CentroApoyoId)
                   .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
