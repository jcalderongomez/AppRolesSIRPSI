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
    public class ModuloConfiguracion : IEntityTypeConfiguration<Modulo>
    {
        public void Configure(EntityTypeBuilder<Modulo> builder)
        {
            builder.Property(x => x.ModuloId).IsRequired();
            builder.Property(x =>x.Nombre).IsRequired().HasMaxLength(50);
            builder.Property(x =>x.Descripcion).IsRequired().HasMaxLength(50);
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();
        }
    }
}
