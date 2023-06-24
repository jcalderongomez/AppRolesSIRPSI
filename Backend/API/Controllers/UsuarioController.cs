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
    public class UsuarioController : ControllerBase
    {

        private readonly IUnidadTrabajo _unidadTrabajo;
        private readonly ILogger<UsuarioController> _logger;
        private readonly IMapper _mapper;
        protected ResponseDto _response;

        public UsuarioController(IUnidadTrabajo unidadTrabajo, ILogger<UsuarioController> logger, 
                    IMapper mapper)
        {
            _unidadTrabajo = unidadTrabajo;
            _logger = logger;
            _mapper = mapper;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<List<UsuarioDto>>> GetUsuarios()
        {
            _logger.LogInformation("Listado de Usuarios");
            var lista = await _unidadTrabajo.Usuario.ObtenerTodos();
            _response.Result = lista;
            _response.DisplayMessage = "Listado de Usuarios";

            return Ok(_response);
        }

        [HttpGet("{id}", Name = "GetUsuario")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<UsuarioDto>> GetCliente(int id)
        {
            if (id == 0) 
            {
                _logger.LogError("Debe enviar el id");
                _response.DisplayMessage = "Debe enviar el id";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }
            var usuario = await _unidadTrabajo.Usuario.Obtener(id);
            if (usuario == null) {
                _logger.LogError("Usuario no existe");
                _response.DisplayMessage = "Usuario no existe";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            _response.Result = usuario;
            _response.DisplayMessage = "Datos del usuario" + usuario.UsuarioId;
            return Ok(_response); //Status code = 200
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UsuarioDto>> PostUsuario([FromBody] UsuarioDto usuarioDto)
        {
            if(usuarioDto == null)
            {
                _response.DisplayMessage = "Información incorrecta";
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest(ModelState);
            //}

            //var usuarioExiste = await _unidadTrabajo.Usuario.ObtenerTodos(m=>m.Nombre.ToLower() == usuarioDto.Nombre.ToLower());
            //if (usuarioExiste != null) {
            //    ModelState.AddModelError("Nombre duplicado","Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}

            var usuario = _mapper.Map<Usuario>(usuarioDto);

            await _unidadTrabajo.Usuario.Agregar(usuario);
            await _unidadTrabajo.Guardar();
            return CreatedAtRoute("GetUsuario", new { id = usuarioDto.UsuarioId }, usuarioDto); //Status code = 201
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult> PutUsuario(int id, [FromBody] UsuarioDto usuarioDto) { 
            if(id != usuarioDto.UsuarioId){
                return BadRequest("Id del usuario no existe");
            }

            //if (!ModelState.IsValid) {
            //    return BadRequest("Id usuario no coincide");
            //}

            //var usuarioExiste = await _unidadTrabajo.Usuario.ObtenerTodos(c => c.Nombre.ToLower() == usuarioDto.Nombre.ToLower()
            //                                                && c.UsuarioId != usuarioDto.UsuarioId);

            //if (usuarioExiste != null) {
            //    ModelState.AddModelError("Nombre Duplicado", "Nombre del módulo ya existe");
            //    return BadRequest(ModelState);
            //}
            
            var usuario = _mapper.Map<Usuario>(usuarioDto);
            
            _unidadTrabajo.Usuario.Actualizar(usuario);
            await _unidadTrabajo.Guardar();
            return Ok(usuario);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> DeleteUsuario(int id)
        {
            var usuario = await _unidadTrabajo.Usuario.Obtener(id);
            if (usuario == null) {
                return NotFound();
            }
            _unidadTrabajo.Usuario.Remover(usuario);
            await _unidadTrabajo.Guardar();
            return NoContent();
        }

        [HttpPost("Register")]
        public async Task<ActionResult> Register(UsuarioDto user)
        {
            var respuesta = await _unidadTrabajo.Usuario.Register(
                new Modelos.Usuario
                {
                    UserName = user.UserName,
                    Nombre = user.Nombre,
                    Cedula = user.Cedula,
                    Email = user.Email,
                    Estado = user.Estado

                }, user.Password);
            if (respuesta == "existe")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Usuario ya Existe";
                return BadRequest(_response);
            }

            if (respuesta == "error")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al crear el Usuario";
                return BadRequest(_response);
            }

            _response.DisplayMessage = "Usuario Creado con Éxito!!!";
            //_response.Result = respuesta;
            JWTPackage jtp = new JWTPackage();
            jtp.UserName = user.UserName;
            jtp.Token = respuesta;
            _response.Result = jtp;
            return Ok(_response);
        }

        [HttpPost("Login")]
        public async Task<ActionResult> Login(UsuarioDto user)
        {
            var respuesta = await _unidadTrabajo.Usuario.Login(user.UserName, user.Password, user.Cedula);
            if (respuesta == "nouser")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Usuario no existe";
                return BadRequest(_response);
            }
            if (respuesta == "wrongpassword")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Password incorrecto";
                return BadRequest(_response);
            }
            if (respuesta == "nodocument")
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error en documento";
                return BadRequest(_response);
            }


            //_response.Result = respuesta;

            JWTPackage jtp = new JWTPackage();
            jtp.UserName = user.UserName;
            jtp.Token = respuesta;
            _response.Result = jtp;

            _response.DisplayMessage = "Usuario Conectado";
            return Ok(_response);
        }

        public class JWTPackage
        {
            public string UserName { get; set; }
            public string Token { get; set; }
        }
    }
}
