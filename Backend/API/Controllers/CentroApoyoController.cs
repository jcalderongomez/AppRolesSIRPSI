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
    public class CentroApoyoController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<CentroApoyoController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public CentroApoyoController(IUnidadTrabajo unidadTrabajo, ILogger<CentroApoyoController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<CentroApoyoDto>>> GetCentroApoyos()
        {
            _logger.LogInformation("Listado de Centros de Apoyo");
            var lista= await _unidadTrabajo.CentroApoyo.ObtenerTodos(incluirPropiedades: "Empresa");
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Centros de Apoyo";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetCentroApoyo")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<CentroApoyoDto>> GetCentroApoyo(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var centroApoyo = await _unidadTrabajo.CentroApoyo.Obtener(id);
            if (centroApoyo == null) {
                _logger.LogError("Centro de Apoyo no existe");
                _response.DisplayMessage = "Centro de Apoyo no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = centroApoyo;
            _response.DisplayMessage = "Datos del Centro Apoyo" + centroApoyo.CentroApoyoId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<CentroApoyoDto>> PostCentroApoyo([FromBody] CentroApoyoDto centroApoyoDto)
        {
            if(centroApoyoDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var centroApoyoExiste = await _unidadTrabajo.CentroApoyo.ObtenerTodos(m=>m.Nombre.ToLower() == centroApoyoDto.Nombre.ToLower());
            //if (centroApoyoExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var centroApoyo = _mapper.Map<CentroApoyo>(centroApoyoDto);

            await _unidadTrabajo.CentroApoyo.Agregar(centroApoyo);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetCentroApoyo", new { id = centroApoyoDto.CentroApoyoId }, centroApoyoDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutCentroApoyo(int id, [FromBody] CentroApoyoDto centroApoyoDto) { 
            if(id != centroApoyoDto.CentroApoyoId){
                return BadRequest("Id del Módulo no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id centroApoyo no coincide");
            //}

            //var centroApoyoExiste = await _unidadTrabajo.CentroApoyo.ObtenerTodos(c => c.Nombre.ToLower() == centroApoyoDto.Nombre.ToLower()
            //                                                && c.CentroApoyoId != centroApoyoDto.CentroApoyoId);

            //if (centroApoyoExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var centroApoyo = _mapper.Map<CentroApoyo>(centroApoyoDto);
            
            _unidadTrabajo.CentroApoyo.Actualizar(centroApoyo);
            await _unidadTrabajo.Guardar();
            return Ok(centroApoyo);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteCentroApoyo(int id)
        {
            var centroApoyo = await _unidadTrabajo.CentroApoyo.Obtener(id);
            if (centroApoyo == null) {
                return NotFound();
            }
            _unidadTrabajo.CentroApoyo.Remover(centroApoyo);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
