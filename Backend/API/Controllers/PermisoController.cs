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
    public class PermisoController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<PermisoController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public PermisoController(IUnidadTrabajo unidadTrabajo, ILogger<PermisoController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<PermisoDto>>> GetPermisos()
        {
            _logger.LogInformation("Listado de Permisos");
            var lista = await _unidadTrabajo.Permiso.ObtenerTodos();
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Permisos";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetPermiso")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PermisoDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var permiso = await _unidadTrabajo.Permiso.Obtener(id);
            if (permiso == null) {
                _logger.LogError("Permiso no existe");
                _response.DisplayMessage = "Permiso no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = permiso;
            _response.DisplayMessage = "Datos del permiso" + permiso.PermisoId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<PermisoDto>> PostPermiso([FromBody] PermisoDto permisoDto)
        {
            if(permisoDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var permisoExiste = await _unidadTrabajo.Permiso.ObtenerTodos(m=>m.Nombre.ToLower() == permisoDto.Nombre.ToLower());
            //if (permisoExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var permiso = _mapper.Map<Permiso>(permisoDto);

            await _unidadTrabajo.Permiso.Agregar(permiso);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetPermiso", new { id = permisoDto.PermisoId }, permisoDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutPermiso(int id, [FromBody] PermisoDto permisoDto) { 
            if(id != permisoDto.PermisoId){
                return BadRequest("Id del permiso no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id permiso no coincide");
            //}

            //var permisoExiste = await _unidadTrabajo.Permiso.ObtenerTodos(c => c.Nombre.ToLower() == permisoDto.Nombre.ToLower()
            //                                                && c.PermisoId != permisoDto.PermisoId);

            //if (permisoExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var permiso = _mapper.Map<Permiso>(permisoDto);
            
            _unidadTrabajo.Permiso.Actualizar(permiso);
            await _unidadTrabajo.Guardar();
            return Ok(permiso);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeletePermiso(int id)
        {
            var permiso = await _unidadTrabajo.Permiso.Obtener(id);
            if (permiso == null) {
                return NotFound();
            }
            _unidadTrabajo.Permiso.Remover(permiso);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
