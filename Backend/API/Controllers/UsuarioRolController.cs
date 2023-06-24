using APIClientes.Modelos.Dto;
using AutoMapper;
using Azure;
using Backend.AccesoDatos.Repositorio;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;
using Backend.API.Modelos.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Backend.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioRolController : Controller
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<UsuarioRolController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public UsuarioRolController (IUnidadTrabajo unidadTrabajo, ILogger<UsuarioRolController> logger,
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<UsuarioRolDto>>> GetUsuarioRols()
        {
            _logger.LogInformation("Listado de Usuario por Roles");
            var lista = await _unidadTrabajo.UsuarioRol.ObtenerTodos(incluirPropiedades: "Usuario,Rol");
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Usuario por Roles";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetUsuarioRol")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UsuarioRolDto>> GetCliente(int id)
        {
            if (id == 0)
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var rol = await _unidadTrabajo.UsuarioRol.Obtener(id);
            if (rol == null)
            {
                _logger.LogError("UsuarioRol no existe");
                _response.DisplayMessage = "UsuarioRol no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = rol;
            _response.DisplayMessage = "Datos de la rol" + rol.UsuarioRolId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UsuarioRolDto>> PostUsuarioRol([FromBody] UsuarioRolDto usuarioRolDto)
        {
            if (usuarioRolDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var rolExiste = await _unidadTrabajo.UsuarioRol.ObtenerTodos(m=>m.Nombre.ToLower() == rolDto.Nombre.ToLower());
            //if (rolExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var rol = _mapper.Map<UsuarioRol>(usuarioRolDto);

            await _unidadTrabajo.UsuarioRol.Agregar(rol);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetUsuarioRol", new { id = usuarioRolDto.UsuarioRolId }, usuarioRolDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutUsuarioRol(int id, [FromBody] UsuarioRolDto rolDto)
        {
            if (id != rolDto.UsuarioRolId)
            {
                return BadRequest("Id de la rol no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id rol no coincide");
            //}

            //var rolExiste = await _unidadTrabajo.UsuarioRol.ObtenerTodos(c => c.Nombre.ToLower() == rolDto.Nombre.ToLower()
            //                                                && c.UsuarioRolId != rolDto.UsuarioRolId);

            //if (rolExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var rol = _mapper.Map<UsuarioRol>(rolDto);

            _unidadTrabajo.UsuarioRol.Actualizar(rol);
            await _unidadTrabajo.Guardar();
            return Ok(rol);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteUsuarioRol(int id)
        {
            var rol = await _unidadTrabajo.UsuarioRol.Obtener(id);
            if (rol == null)
            {
                return NotFound();
            }
            _unidadTrabajo.UsuarioRol.Remover(rol);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
