using AutoMapper;
using Backend.API.Modelos;
using Backend.API.Modelos.Dto;

namespace Backend.API.Helpers
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<CentroApoyo, CentroApoyoDto>().ReverseMap();
            CreateMap<Empleado, EmpleadoDto>().ReverseMap();
            CreateMap<Empresa, EmpresaDto>().ReverseMap();
            CreateMap<Ministerio, MinisterioDto>().ReverseMap();
            CreateMap<Modulo, ModuloDto>().ReverseMap();
            CreateMap<Permiso, PermisoDto>().ReverseMap();
            CreateMap<Psicologo, PsicologoDto>().ReverseMap();
            CreateMap<Rol, RolDto>().ReverseMap();
            CreateMap<Usuario, UsuarioDto>().ReverseMap();
            CreateMap<UsuarioRol, UsuarioRolDto>().ReverseMap();
        }
    }
}
