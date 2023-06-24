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
    public class MinisterioConfiguracion : IEntityTypeConfiguration<Ministerio>
    {
        public void Configure(EntityTypeBuilder<Ministerio> builder)
        {
            builder.Property(x => x.MinisterioId).IsRequired();
            builder.Property(x =>x.Nombre).IsRequired().HasMaxLength(50);
            builder.Property(x =>x.Nit).IsRequired().HasMaxLength(50);
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();
        }
    }
}
