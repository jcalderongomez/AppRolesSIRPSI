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
    public class PsicologoController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<PsicologoController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public PsicologoController(IUnidadTrabajo unidadTrabajo, ILogger<PsicologoController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<PsicologoDto>>> GetPsicologos()
        {
            _logger.LogInformation("Listado de Psicologos");
            var lista = await _unidadTrabajo.Psicologo.ObtenerTodos(incluirPropiedades:"Usuario,CentroApoyo");
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Psicologos";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetPsicologo")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PsicologoDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var psicologo = await _unidadTrabajo.Psicologo.Obtener(id);
            if (psicologo == null) {
                _logger.LogError("Psicologo no existe");
                _response.DisplayMessage = "Psicologo no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = psicologo;
            _response.DisplayMessage = "Datos del psicologo" + psicologo.PsicologoId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<PsicologoDto>> PostPsicologo([FromBody] PsicologoDto psicologoDto)
        {
            if(psicologoDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var psicologoExiste = await _unidadTrabajo.Psicologo.ObtenerTodos(m=>m.Nombre.ToLower() == psicologoDto.Nombre.ToLower());
            //if (psicologoExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var psicologo = _mapper.Map<Psicologo>(psicologoDto);

            await _unidadTrabajo.Psicologo.Agregar(psicologo);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetPsicologo", new { id = psicologoDto.PsicologoId }, psicologoDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutPsicologo(int id, [FromBody] PsicologoDto psicologoDto) { 
            if(id != psicologoDto.PsicologoId){
                return BadRequest("Id del psicologo no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id psicologo no coincide");
            //}

            //var psicologoExiste = await _unidadTrabajo.Psicologo.ObtenerTodos(c => c.Nombre.ToLower() == psicologoDto.Nombre.ToLower()
            //                                                && c.PsicologoId != psicologoDto.PsicologoId);

            //if (psicologoExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var psicologo = _mapper.Map<Psicologo>(psicologoDto);
            
            _unidadTrabajo.Psicologo.Actualizar(psicologo);
            await _unidadTrabajo.Guardar();
            return Ok(psicologo);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeletePsicologo(int id)
        {
            var psicologo = await _unidadTrabajo.Psicologo.Obtener(id);
            if (psicologo == null) {
                return NotFound();
            }
            _unidadTrabajo.Psicologo.Remover(psicologo);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
