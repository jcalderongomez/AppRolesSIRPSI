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
    public class RolController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<RolController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public RolController(IUnidadTrabajo unidadTrabajo, ILogger<RolController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<RolDto>>> GetRols()
        {
            _logger.LogInformation("Listado de Roles");
            var lista = await _unidadTrabajo.Rol.ObtenerTodos();
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Rols";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetRol")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<RolDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var rol = await _unidadTrabajo.Rol.Obtener(id);
            if (rol == null) {
                _logger.LogError("Rol no existe");
                _response.DisplayMessage = "Rol no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = rol;
            _response.DisplayMessage = "Datos de la rol" + rol.RolId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<RolDto>> PostRol([FromBody] RolDto rolDto)
        {
            if(rolDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var rolExiste = await _unidadTrabajo.Rol.ObtenerTodos(m=>m.Nombre.ToLower() == rolDto.Nombre.ToLower());
            //if (rolExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var rol = _mapper.Map<Rol>(rolDto);

            await _unidadTrabajo.Rol.Agregar(rol);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetRol", new { id = rolDto.RolId }, rolDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutRol(int id, [FromBody] RolDto rolDto) { 
            if(id != rolDto.RolId){
                return BadRequest("Id de la rol no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id rol no coincide");
            //}

            //var rolExiste = await _unidadTrabajo.Rol.ObtenerTodos(c => c.Nombre.ToLower() == rolDto.Nombre.ToLower()
            //                                                && c.RolId != rolDto.RolId);

            //if (rolExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var rol = _mapper.Map<Rol>(rolDto);
            
            _unidadTrabajo.Rol.Actualizar(rol);
            await _unidadTrabajo.Guardar();
            return Ok(rol);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteRol(int id)
        {
            var rol = await _unidadTrabajo.Rol.Obtener(id);
            if (rol == null) {
                return NotFound();
            }
            _unidadTrabajo.Rol.Remover(rol);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
