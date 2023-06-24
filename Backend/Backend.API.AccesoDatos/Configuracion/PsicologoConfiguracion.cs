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
    public class PsicologoConfiguracion : IEntityTypeConfiguration<Psicologo>
    {
        public void Configure(EntityTypeBuilder<Psicologo> builder)
        {
            builder.Property(x => x.PsicologoId).IsRequired();
            builder.Property(x => x.MatriculaProfesional).IsRequired().HasMaxLength(250);
            builder.Property(x => x.Especializacion).IsRequired().HasMaxLength(250);
            builder.Property(x => x.UsuarioId).IsRequired();
            builder.Property(x => x.CentroApoyoId).IsRequired();
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();

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
