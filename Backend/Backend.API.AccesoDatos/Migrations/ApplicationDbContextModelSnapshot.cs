﻿// <auto-generated />
using System;
using Backend.API.AccesoDatos.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.API.AccesoDatos.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Backend.API.Modelos.CentroApoyo", b =>
                {
                    b.Property<int>("CentroApoyoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CentroApoyoId"));

                    b.Property<int>("EmpresaId")
                        .HasColumnType("int");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("CentroApoyoId");

                    b.HasIndex("EmpresaId");

                    b.ToTable("CentroApoyos");
                });

            modelBuilder.Entity("Backend.API.Modelos.Empleado", b =>
                {
                    b.Property<int>("EmpleadoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EmpleadoId"));

                    b.Property<int>("CentroApoyoId")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("EmpleadoId");

                    b.HasIndex("CentroApoyoId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Empleados");
                });

            modelBuilder.Entity("Backend.API.Modelos.Empresa", b =>
                {
                    b.Property<int>("EmpresaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EmpresaId"));

                    b.Property<bool>("Estado")
                        .HasColumnType("bit");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaFundacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<int>("MinisterioId")
                        .HasColumnType("int");

                    b.Property<string>("Nit")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("EmpresaId");

                    b.HasIndex("MinisterioId");

                    b.ToTable("Empresas");
                });

            modelBuilder.Entity("Backend.API.Modelos.Ministerio", b =>
                {
                    b.Property<int>("MinisterioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("MinisterioId"));

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nit")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("MinisterioId");

                    b.ToTable("Ministerios");
                });

            modelBuilder.Entity("Backend.API.Modelos.Modulo", b =>
                {
                    b.Property<int>("ModuloId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ModuloId"));

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("ModuloId");

                    b.ToTable("Modulos");
                });

            modelBuilder.Entity("Backend.API.Modelos.Permiso", b =>
                {
                    b.Property<int>("PermisoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PermisoId"));

                    b.Property<bool>("Consultar")
                        .HasColumnType("bit");

                    b.Property<bool>("Editar")
                        .HasColumnType("bit");

                    b.Property<bool>("Eliminar")
                        .HasColumnType("bit");

                    b.Property<bool>("Estado")
                        .HasColumnType("bit");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<int>("ModuloId")
                        .HasColumnType("int");

                    b.Property<int>("RolId")
                        .HasColumnType("int");

                    b.Property<bool>("Ver")
                        .HasColumnType("bit");

                    b.HasKey("PermisoId");

                    b.HasIndex("ModuloId");

                    b.HasIndex("RolId");

                    b.ToTable("Permisos");
                });

            modelBuilder.Entity("Backend.API.Modelos.Psicologo", b =>
                {
                    b.Property<int>("PsicologoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PsicologoId"));

                    b.Property<int>("CentroApoyoId")
                        .HasColumnType("int");

                    b.Property<string>("Especializacion")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("MatriculaProfesional")
                        .IsRequired()
                        .HasMaxLength(250)
                        .HasColumnType("nvarchar(250)");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("PsicologoId");

                    b.HasIndex("CentroApoyoId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Psicologos");
                });

            modelBuilder.Entity("Backend.API.Modelos.Rol", b =>
                {
                    b.Property<int>("RolId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RolId"));

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasMaxLength(400)
                        .HasColumnType("nvarchar(400)");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(400)
                        .HasColumnType("nvarchar(400)");

                    b.HasKey("RolId");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Backend.API.Modelos.Usuario", b =>
                {
                    b.Property<int>("UsuarioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UsuarioId"));

                    b.Property<string>("Cedula")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool>("Estado")
                        .HasColumnType("bit");

                    b.Property<DateTime>("FechaActualizacion")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaRegistro")
                        .HasColumnType("datetime2");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("UsuarioId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Backend.API.Modelos.UsuarioRol", b =>
                {
                    b.Property<int>("UsuarioRolId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UsuarioRolId"));

                    b.Property<int>("RolId")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("UsuarioRolId");

                    b.HasIndex("RolId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("UsuarioRoles");
                });

            modelBuilder.Entity("Backend.API.Modelos.CentroApoyo", b =>
                {
                    b.HasOne("Backend.API.Modelos.Empresa", "Empresa")
                        .WithMany()
                        .HasForeignKey("EmpresaId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Empresa");
                });

            modelBuilder.Entity("Backend.API.Modelos.Empleado", b =>
                {
                    b.HasOne("Backend.API.Modelos.CentroApoyo", "CentroApoyo")
                        .WithMany()
                        .HasForeignKey("CentroApoyoId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Backend.API.Modelos.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CentroApoyo");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("Backend.API.Modelos.Empresa", b =>
                {
                    b.HasOne("Backend.API.Modelos.Ministerio", "Ministerio")
                        .WithMany()
                        .HasForeignKey("MinisterioId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Ministerio");
                });

            modelBuilder.Entity("Backend.API.Modelos.Permiso", b =>
                {
                    b.HasOne("Backend.API.Modelos.Modulo", "Modulo")
                        .WithMany()
                        .HasForeignKey("ModuloId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.API.Modelos.Rol", "Rol")
                        .WithMany()
                        .HasForeignKey("RolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Modulo");

                    b.Navigation("Rol");
                });

            modelBuilder.Entity("Backend.API.Modelos.Psicologo", b =>
                {
                    b.HasOne("Backend.API.Modelos.CentroApoyo", "CentroApoyo")
                        .WithMany()
                        .HasForeignKey("CentroApoyoId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Backend.API.Modelos.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("CentroApoyo");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("Backend.API.Modelos.UsuarioRol", b =>
                {
                    b.HasOne("Backend.API.Modelos.Rol", "Rol")
                        .WithMany()
                        .HasForeignKey("RolId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Backend.API.Modelos.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Rol");

                    b.Navigation("Usuario");
                });
#pragma warning restore 612, 618
        }
    }
}
