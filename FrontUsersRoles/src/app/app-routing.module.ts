import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexappComponent } from './indexapp/indexapp.component';

const routes: Routes = [
  {path: '', component:IndexappComponent},
  //{path: 'validar2fa', component:Validar2faComponent},
  {path: 'login', component:LoginComponent},
  {path: 'inicio', component: DashboardComponent,
    children:[

      {path: 'dashboard', component: DashboardComponent},

      { path: 'centro', 
        loadChildren: () => import('./centro/centro.module').then(m => m.CentroModule)
      },
      { path: 'empleado', 
        loadChildren: () => import('./empleado/empleado.module').then(m => m.EmpleadoModule)
      },
      { path: 'empresa', 
        loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule)
      },
      { path: 'ministerio', 
        loadChildren: () => import('./ministerio/ministerio.module').then(m => m.MinisterioModule)
      },
      { path: 'modulo', 
        loadChildren: () => import('./modulo/modulo.module').then(m => m.ModuloModule)
      },  
      { path: 'usuario', 
        loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
      },  
      { path: 'permiso', 
        loadChildren: () => import('./permiso/permiso.module').then(m => m.PermisoModule)
      },  

      { path: 'psicologo', 
        loadChildren: () => import('./psicologo/psicologo.module').then(m => m.PsicologoModule)
      },  

      { path: 'usuarioRol', 
        loadChildren: () => import('./usuariorol/usuariorol.module').then(m => m.UsuariorolModule)
      },  
      
      { path: 'rol', 
        loadChildren: () => import('./rol/rol.module').then(m => m.RolModule)
      },
    ]},
    
    {path: 'salir', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
