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
    public class PermisoConfiguracion : IEntityTypeConfiguration<Permiso>
    {
        public void Configure(EntityTypeBuilder<Permiso> builder)
        {
            builder.Property(x => x.PermisoId).IsRequired();
            builder.Property(x =>x.Ver).IsRequired();
            builder.Property(x =>x.Editar).IsRequired();
            builder.Property(x => x.Consultar).IsRequired();
            builder.Property(x => x.Eliminar).IsRequired();
            builder.Property(x => x.Estado).IsRequired();
            builder.Property(x => x.FechaRegistro).IsRequired();
            builder.Property(x => x.FechaActualizacion).IsRequired();
        }
    }
}
