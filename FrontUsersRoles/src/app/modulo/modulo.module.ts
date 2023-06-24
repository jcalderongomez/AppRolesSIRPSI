import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloCrearComponent } from './modulo-crear/modulo-crear.component';
import { ModuloEditarComponent } from './modulo-editar/modulo-editar.component';
import { ModuloEliminarComponent } from './modulo-eliminar/modulo-eliminar.component';
import { ModuloListarComponent } from './modulo-listar/modulo-listar.component';
import { ModuloHomeComponent } from './modulo-home/modulo-home.component';
import { ModuloRoutingModule } from './modulo-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModuloCrearComponent,
    ModuloEditarComponent,
    ModuloEliminarComponent,
    ModuloListarComponent,
    ModuloHomeComponent
  ],
  imports: [
    CommonModule,
    ModuloRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ModuloModule { }
