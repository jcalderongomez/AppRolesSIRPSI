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
    public class EmpresaConfiguracion : IEntityTypeConfiguration<Empresa>
    {
        public void Configure(EntityTypeBuilder<Empresa> builder)
        {
            builder.Property(x => x.EmpresaId).IsRequired();
            builder.Property(x =>x.Nombre).IsRequired().HasMaxLength(50);
            builder.Property(x =>x.Nit).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Estado).IsRequired();
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();
            builder.Property(x => x.MinisterioId).IsRequired();
            builder.Property(x => x.FechaFundacion).IsRequired();

            //Relaciones 

            builder.HasOne(x => x.Ministerio).WithMany()
                   .HasForeignKey(x => x.MinisterioId)
                   .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
