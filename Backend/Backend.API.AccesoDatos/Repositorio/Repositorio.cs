using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Modelos;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
//using BackendUserRol.Modelos.Especificaciones;
using System.Linq.Expressions;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;



namespace Backend.API.AccesoDatos.Repositorio
{
    public class Repositorio<T> : IRepositorio<T> where T : class
    {
        //private readonly IConfiguration _configuration;
        private readonly ApplicationDbContext _db;
        internal DbSet<T> dbSet;

        public Repositorio(ApplicationDbContext db)
        {
            _db = db;
            this.dbSet = _db.Set<T>();
        }


        public async Task Agregar(T entidad)
        {
           await dbSet.AddAsync(entidad);    // insert into Table
        }

        public async Task<T> Obtener(int id)
        {
            return await dbSet.FindAsync(id);    // select * from (Solo por Id)
        }


        public async Task<IEnumerable<T>> ObtenerTodos(Expression<Func<T, bool>> filtro = null, 
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string incluirPropiedades = null, bool isTracking = true)
        {
            IQueryable<T> query = dbSet;
            if(filtro !=null)
            {
                query = query.Where(filtro);   //  select /* from where ....
            }
            if(incluirPropiedades !=null)
            {
                foreach (var incluirProp in incluirPropiedades.Split(new char[] { ','}, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(incluirProp);    //  ejemplo "Categoria,Marca"
                }
            }
            if(orderBy !=null)
            {
                query = orderBy(query);
            }
            if(!isTracking)
            {
                query = query.AsNoTracking();
            }
            return await query.ToListAsync();

        }

        //public PagedList<T> ObtenerTodosPaginado(Parametros parametros, Expression<Func<T, bool>> filtro = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string incluirPropiedades = null, bool isTracking = true)
        //{
        //    IQueryable<T> query = dbSet;
        //    if (filtro != null)
        //    {
        //        query = query.Where(filtro);   //  select /* from where ....
        //    }
        //    if (incluirPropiedades != null)
        //    {
        //        foreach (var incluirProp in incluirPropiedades.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
        //        {
        //            query = query.Include(incluirProp);    //  ejemplo "Categoria,Marca"
        //        }
        //    }
        //    if (orderBy != null)
        //    {
        //        query = orderBy(query);
        //    }
        //    if (!isTracking)
        //    {
        //        query = query.AsNoTracking();
        //    }
        //    return PagedList<T>.ToPagedList(query, parametros.PageNumber, parametros.PageSize);
        //}

        public async Task<T> ObtenerPrimero(Expression<Func<T, bool>> filtro = null,
            string incluirPropiedades = null, bool isTracking = true)
        {

            IQueryable<T> query = dbSet;
            if (filtro != null)
            {
                query = query.Where(filtro);   //  select /* from where ....
            }
            if (incluirPropiedades != null)
            {
                foreach (var incluirProp in incluirPropiedades.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
                {
                    query = query.Include(incluirProp);    //  ejemplo "Categoria,Marca"
                }
            }
          
            if (!isTracking)
            {
                query = query.AsNoTracking();
            }
            return await query.FirstOrDefaultAsync();
        }

       

        public void Remover(T entidad)
        {
            dbSet.Remove(entidad);
        }

        public void RemoverRango(IEnumerable<T> entidad)
        {
           dbSet.RemoveRange(entidad);
        }


    }
}
