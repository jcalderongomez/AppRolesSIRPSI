﻿using Backend.API.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.API.AccesoDatos.Repositorio.IRepositorio
{
    public interface IPsicologoRepositorio: IRepositorio<Psicologo>
    {
        void Actualizar(Psicologo psicologo) { 
            psicologo.FechaActualizacion= DateTime.Now;
        }

    }
}
