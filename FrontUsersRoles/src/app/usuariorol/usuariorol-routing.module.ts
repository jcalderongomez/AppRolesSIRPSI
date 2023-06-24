import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariorolHomeComponent } from './usuariorol-home/usuariorol-home.component';
import { UsuariorolListarComponent } from './usuariorol-listar/usuariorol-listar.component';
import { UsuariorolCrearComponent } from './usuariorol-crear/usuariorol-crear.component';
import { UsuariorolEditarComponent } from './usuariorol-editar/usuariorol-editar.component';
import { UsuariorolEliminarComponent } from './usuariorol-eliminar/usuariorol-eliminar.component';

const routes: Routes= [
  {
    path: '', component: UsuariorolHomeComponent, 
    children: [  
      { path: 'crear', component: UsuariorolCrearComponent },   
      { path: 'editar:/id', component: UsuariorolEditarComponent },   
      { path: 'eliminar:/id', component: UsuariorolEliminarComponent },   
      { path: 'listar', component: UsuariorolListarComponent },
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
export class UsuariorolRoutingModule { }
