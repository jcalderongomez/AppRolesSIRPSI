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
    public class UsuarioRolConfiguracion : IEntityTypeConfiguration<UsuarioRol>
    {
        public void Configure(EntityTypeBuilder<UsuarioRol> builder)
        {
            builder.Property(x => x.UsuarioRolId).IsRequired();
            builder.Property(x => x.UsuarioId).IsRequired();
            builder.Property(x => x.RolId).IsRequired();
        }
    }
}
