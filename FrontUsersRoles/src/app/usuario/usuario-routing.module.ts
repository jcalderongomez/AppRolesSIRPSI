import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './usuario-eliminar/usuario-eliminar.component';

const routes: Routes= [
  {
    path: '', component: UsuarioHomeComponent, 
    children: [
      
      { path: 'listar', component: UsuarioListarComponent },
      { path: 'crear', component: UsuarioCrearComponent },
      { path: 'editar/:id', component: UsuarioEditarComponent },
      { path: 'eliminar/:id', component: UsuarioEliminarComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule { }
