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
    public class UsuarioConfiguracion : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.Property(x => x.UsuarioId).IsRequired();
            builder.Property(x => x.Nombre).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Cedula).IsRequired().HasMaxLength(50);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(50);
            builder.Property(x => x.UserName).IsRequired().HasMaxLength(50);
            //builder.Property(x => x.Password).IsRequired().HasMaxLength(50);
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();
            builder.Property(x => x.Estado).IsRequired();
        }
    }
}
