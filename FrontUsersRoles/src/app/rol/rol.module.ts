import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolCrearComponent } from './rol-crear/rol-crear.component';
import { RolListarComponent } from './rol-listar/rol-listar.component';
import { RolEditarComponent } from './rol-editar/rol-editar.component';
import { RolEliminarComponent } from './rol-eliminar/rol-eliminar.component';
import { RolHomeComponent } from './rol-home/rol-home.component';
import { RolRoutingModule } from './rol-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RolCrearComponent,
    RolListarComponent,
    RolEditarComponent,
    RolEliminarComponent,
    RolHomeComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RolModule { }
