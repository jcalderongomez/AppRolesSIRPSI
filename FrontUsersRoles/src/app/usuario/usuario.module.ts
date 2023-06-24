import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioEliminarComponent } from './usuario-eliminar/usuario-eliminar.component';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsuarioCrearComponent,
    UsuarioListarComponent,
    UsuarioEditarComponent,
    UsuarioEliminarComponent,
    UsuarioHomeComponent,
 
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
