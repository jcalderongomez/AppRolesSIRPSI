import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariorolListarComponent } from './usuariorol-listar/usuariorol-listar.component';
import { UsuariorolHomeComponent } from './usuariorol-home/usuariorol-home.component';
import { UsuariorolEliminarComponent } from './usuariorol-eliminar/usuariorol-eliminar.component';
import { UsuariorolEditarComponent } from './usuariorol-editar/usuariorol-editar.component';
import { UsuariorolCrearComponent } from './usuariorol-crear/usuariorol-crear.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariorolRoutingModule } from './usuariorol-routing.module';



@NgModule({
  declarations: [
    UsuariorolListarComponent,
    UsuariorolHomeComponent,
    UsuariorolEliminarComponent,
    UsuariorolEditarComponent,
    UsuariorolCrearComponent
  ],
  imports: [
    CommonModule,
  
    MaterialModule,
    ReactiveFormsModule,
UsuariorolRoutingModule
  ]
})
export class UsuariorolModule { }
