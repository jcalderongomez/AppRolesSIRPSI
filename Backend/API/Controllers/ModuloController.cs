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
    public class ModuloController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<ModuloController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public ModuloController(IUnidadTrabajo unidadTrabajo, ILogger<ModuloController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<Modulo>>> GetModulos()
        {
            _logger.LogInformation("Listado de módulos");
            var lista= await _unidadTrabajo.Modulo.ObtenerTodos();
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Modulos";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetModulo")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Modulo>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var modulo = await _unidadTrabajo.Modulo.Obtener(id);
            if (modulo == null) {
                _logger.LogError("Modulo no existe");
                _response.DisplayMessage = "Modulo no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = modulo;
            _response.DisplayMessage = "Datos del modulo" + modulo.ModuloId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Modulo>> PostModulo([FromBody] ModuloDto moduloDto)
        {
            if(moduloDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var moduloExiste = await _unidadTrabajo.Modulo.ObtenerTodos(m=>m.Nombre.ToLower() == moduloDto.Nombre.ToLower());
            //if (moduloExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var modulo = _mapper.Map<Modulo>(moduloDto);

            await _unidadTrabajo.Modulo.Agregar(modulo);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetModulo", new { id = moduloDto.ModuloId }, moduloDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutModulo(int id, [FromBody] ModuloDto moduloDto) { 
            if(id != moduloDto.ModuloId){
                return BadRequest("Id del Módulo no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id modulo no coincide");
            //}

            //var moduloExiste = await _unidadTrabajo.Modulo.ObtenerTodos(c => c.Nombre.ToLower() == moduloDto.Nombre.ToLower()
            //                                                && c.ModuloId != moduloDto.ModuloId);

            //if (moduloExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var modulo = _mapper.Map<Modulo>(moduloDto);
            
            _unidadTrabajo.Modulo.Actualizar(modulo);
            await _unidadTrabajo.Guardar();
            return Ok(modulo);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteModulo(int id)
        {
            var modulo = await _unidadTrabajo.Modulo.Obtener(id);
            if (modulo == null) {
                return NotFound();
            }
            _unidadTrabajo.Modulo.Remover(modulo);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
