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
    public class EmpresaController : ControllerBase
    {
        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<EmpresaController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public EmpresaController(IUnidadTrabajo unidadTrabajo, ILogger<EmpresaController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<EmpresaDto>>> GetEmpresas()
        {
            _logger.LogInformation("Listado de Empresas");
            var lista = await _unidadTrabajo.Empresa.ObtenerTodos(incluirPropiedades: "Ministerio");
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Empresas";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetEmpresa")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<EmpresaDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var empresa = await _unidadTrabajo.Empresa.Obtener(id);
            if (empresa == null) {
                _logger.LogError("Empresa no existe");
                _response.DisplayMessage = "Empresa no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = empresa;
            _response.DisplayMessage = "Datos de la empresa" + empresa.EmpresaId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<EmpresaDto>> PostEmpresa([FromBody] EmpresaDto empresaDto)
        {
            if(empresaDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var empresaExiste = await _unidadTrabajo.Empresa.ObtenerTodos(m=>m.Nombre.ToLower() == empresaDto.Nombre.ToLower());
            //if (empresaExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var empresa = _mapper.Map<Empresa>(empresaDto);

            await _unidadTrabajo.Empresa.Agregar(empresa);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetEmpresa", new { id = empresaDto.EmpresaId }, empresaDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutEmpresa(int id, [FromBody] EmpresaDto empresaDto) { 
            if(id != empresaDto.EmpresaId){
                return BadRequest("Id de la empresa no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id empresa no coincide");
            //}

            //var empresaExiste = await _unidadTrabajo.Empresa.ObtenerTodos(c => c.Nombre.ToLower() == empresaDto.Nombre.ToLower()
            //                                                && c.EmpresaId != empresaDto.EmpresaId);

            //if (empresaExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var empresa = _mapper.Map<Empresa>(empresaDto);
            
            _unidadTrabajo.Empresa.Actualizar(empresa);
            await _unidadTrabajo.Guardar();
            return Ok(empresa);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteEmpresa(int id)
        {
            var empresa = await _unidadTrabajo.Empresa.Obtener(id);
            if (empresa == null) {
                return NotFound();
            }
            _unidadTrabajo.Empresa.Remover(empresa);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }
    }
}
