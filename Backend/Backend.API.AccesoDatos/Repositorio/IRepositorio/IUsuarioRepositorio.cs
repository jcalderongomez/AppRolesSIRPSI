using Backend.API.Modelos;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.AccesoDatos.Repositorio.IRepositorio
{
    public interface IUsuarioRepositorio: IRepositorio<Usuario>
    {
        void Actualizar(Usuario Usuario) { 
            Usuario.FechaActualizacion= DateTime.Now;
        }

        Task<string> Register(Usuario user, string password);
        Task<string> Login(string userName, string password, string document);

        Task<string> Login2FA(string userName);
        Task<bool> UserExiste(string userName);
    }
}
