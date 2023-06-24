using APIClientes.Modelos.Dto;
using AutoMapper;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;
using Backend.API.Modelos.Dto;
using Microsoft.AspNetCore.Mvc;

namespace Backend.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MinisterioController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<MinisterioController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public MinisterioController(IUnidadTrabajo unidadTrabajo, ILogger<MinisterioController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<MinisterioDto>>> GetMinisterios()
        {
            _logger.LogInformation("Listado de módulos");
            var lista= await _unidadTrabajo.Ministerio.ObtenerTodos();
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Ministerios";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetMinisterio")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<MinisterioDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var ministerio = await _unidadTrabajo.Ministerio.Obtener(id);
            if (ministerio == null) {
                _logger.LogError("Ministerio no existe");
                _response.DisplayMessage = "Ministerio no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = ministerio;
            _response.DisplayMessage = "Datos del ministerio" + ministerio.MinisterioId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<MinisterioDto>> PostMinisterio([FromBody] MinisterioDto ministerioDto)
        {
            if(ministerioDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var ministerioExiste = await _unidadTrabajo.Ministerio.ObtenerTodos(m=>m.Nombre.ToLower() == ministerioDto.Nombre.ToLower());
            //if (ministerioExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var ministerio = _mapper.Map<Ministerio>(ministerioDto);

            await _unidadTrabajo.Ministerio.Agregar(ministerio);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetMinisterio", new { id = ministerioDto.MinisterioId }, ministerioDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutMinisterio(int id, [FromBody] MinisterioDto ministerioDto) { 

            if(id != ministerioDto.MinisterioId){
                return BadRequest("Id del Módulo no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id ministerio no coincide");
            //}

            //var ministerioExiste = await _unidadTrabajo.Ministerio.ObtenerTodos(c => c.Nombre.ToLower() == ministerioDto.Nombre.ToLower()
            //                                                && c.MinisterioId != ministerioDto.MinisterioId);

            //if (ministerioExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var ministerio = _mapper.Map<Ministerio>(ministerioDto);
            
            _unidadTrabajo.Ministerio.Actualizar(ministerio);
            await _unidadTrabajo.Guardar();
            return Ok(ministerio);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteMinisterio(int id)
        {
            var ministerio = await _unidadTrabajo.Ministerio.Obtener(id);
            if (ministerio == null) {
                return NotFound();
            }
            _unidadTrabajo.Ministerio.Remover(ministerio);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
