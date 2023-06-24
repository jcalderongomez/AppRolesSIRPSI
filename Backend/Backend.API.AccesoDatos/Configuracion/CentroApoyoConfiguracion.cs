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
    public class CentroApoyoConfiguracion : IEntityTypeConfiguration<CentroApoyo>
    {
        public void Configure(EntityTypeBuilder<CentroApoyo> builder)
        {
            builder.Property(x => x.CentroApoyoId).IsRequired();
            builder.Property(x =>x.Nombre).IsRequired().HasMaxLength(50);
            builder.Property(x =>x.EmpresaId).IsRequired();
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();

            //Relaciones 

            builder.HasOne(x => x.Empresa).WithMany()
                   .HasForeignKey(x => x.EmpresaId)
                   .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
