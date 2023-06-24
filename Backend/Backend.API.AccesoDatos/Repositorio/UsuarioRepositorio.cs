using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace Backend.API.AccesoDatos.Repositorio
{
    public class UsuarioRepositorio : Repositorio<Usuario>, IUsuarioRepositorio
    {
        private readonly ApplicationDbContext _db;
        private readonly IConfiguration _configuration;


        public UsuarioRepositorio(ApplicationDbContext db, IConfiguration configuration) : base(db)
        {
            _db = db;
            _configuration = configuration;
        }

        public void Actualizar(Usuario usuario)
        {
            var usuarioBD = _db.Usuarios.FirstOrDefault(b => b.UsuarioId == usuario.UsuarioId);
            if (usuarioBD != null)
            {
                usuarioBD.Nombre = usuario.Nombre;
                usuarioBD.Cedula= usuario.Cedula;
                usuarioBD.Email= usuario.Email;
                usuarioBD.UserName = usuario.UserName;
                //usuarioBD.Password= usuario.Password;
                usuarioBD.FechaRegistro = DateTime.Now;
                usuarioBD.FechaActualizacion = DateTime.Now;
                usuarioBD.Estado= usuario.Estado;
                _db.SaveChanges();
            }
        }


        public async Task<string> Login(string userName, string password, string document)
        {
            var user = await _db.Usuarios.FirstOrDefaultAsync(
                x => x.UserName.ToLower().Equals(userName.ToLower()));

            if (user == null)
            {
                return "nouser";
            }
            else if (!VerificarPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return "wrongpassword";
            }

            var documento = await _db.Usuarios.FirstOrDefaultAsync(
                x => x.Cedula.ToLower().Equals(document.ToLower()));

            if (documento == null)
            {
                return "nodocument";
            }



            else if (user.Cedula == null)
            {
                return "nodocument";
            }
            else
            {
                return CrearToken(user);
            }
        }

        public async Task<string> Login2FA(string userName)
        {
            var user = await _db.Usuarios.FirstOrDefaultAsync(
                x => x.UserName.ToLower().Equals(userName.ToLower()));

            if (user == null)
            {
                return "nouser";
            }
            return user.UserName;
        }

        public async Task<string> Register(Usuario user, string password)
        {
            try
            {
                if (await UserExiste(user.UserName))
                {
                    return "existe";
                }

                CrearPassworHash(password, out byte[] passwordHash, out byte[] passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
                await _db.Usuarios.AddAsync(user);
                await _db.SaveChangesAsync();
                return CrearToken(user);

            }
            catch (Exception)
            {
                return "error";
            }
        }

        private void CrearPassworHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }


        public bool VerificarPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        private string CrearToken(Usuario user)
        {
            var claims = new List<Claim>{
                new Claim(ClaimTypes.NameIdentifier, user.UsuarioId.ToString()),
                new Claim(ClaimTypes.Name,user.UserName)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHadler = new JwtSecurityTokenHandler();
            var token = tokenHadler.CreateToken(tokenDescriptor);
            return tokenHadler.WriteToken(token);
        }


        public async Task<bool> UserExiste(string userName)
        {
            if (await _db.Usuarios.AnyAsync(x => x.UserName.ToLower().Equals(userName.ToLower())))
            {
                return true;
            }
            return false;
        }


    }
}
