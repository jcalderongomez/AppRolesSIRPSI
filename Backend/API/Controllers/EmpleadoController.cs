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
    public class EmpleadoController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<EmpleadoController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public EmpleadoController(IUnidadTrabajo unidadTrabajo, ILogger<EmpleadoController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<EmpleadoDto>>> GetEmpleados()
        {
            _logger.LogInformation("Listado de Empleados");
            var lista = await _unidadTrabajo.Empleado.ObtenerTodos(incluirPropiedades: "Usuario,CentroApoyo");
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Empleados";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetEmpleado")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<EmpleadoDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var empleado = await _unidadTrabajo.Empleado.Obtener(id);
            if (empleado == null) {
                _logger.LogError("Empleado no existe");
                _response.DisplayMessage = "Empleado no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = empleado;
            _response.DisplayMessage = "Datos de la empleado" + empleado.EmpleadoId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<EmpleadoDto>> PostEmpleado([FromBody] EmpleadoDto empleadoDto)
        {
            if(empleadoDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var empleadoExiste = await _unidadTrabajo.Empleado.ObtenerTodos(m=>m.Nombre.ToLower() == empleadoDto.Nombre.ToLower());
            //if (empleadoExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var empleado = _mapper.Map<Empleado>(empleadoDto);

            await _unidadTrabajo.Empleado.Agregar(empleado);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetEmpleado", new { id = empleadoDto.EmpleadoId }, empleadoDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutEmpleado(int id, [FromBody] EmpleadoDto empleadoDto) { 
            if(id != empleadoDto.EmpleadoId){
                return BadRequest("Id de la empleado no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id empleado no coincide");
            //}

            //var empleadoExiste = await _unidadTrabajo.Empleado.ObtenerTodos(c => c.Nombre.ToLower() == empleadoDto.Nombre.ToLower()
            //                                                && c.EmpleadoId != empleadoDto.EmpleadoId);

            //if (empleadoExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var empleado = _mapper.Map<Empleado>(empleadoDto);
            
            _unidadTrabajo.Empleado.Actualizar(empleado);
            await _unidadTrabajo.Guardar();
            return Ok(empleado);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteEmpleado(int id)
        {
            var empleado = await _unidadTrabajo.Empleado.Obtener(id);
            if (empleado == null) {
                return NotFound();
            }
            _unidadTrabajo.Empleado.Remover(empleado);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
