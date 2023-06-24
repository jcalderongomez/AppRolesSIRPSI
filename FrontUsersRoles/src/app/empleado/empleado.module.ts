import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { EmpleadoListarComponent } from './empleado-listar/empleado-listar.component';
import { EmpleadoEliminarComponent } from './empleado-eliminar/empleado-eliminar.component';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';
import { EmpleadoHomeComponent } from './empleado-home/empleado-home.component';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpleadoCrearComponent,
    EmpleadoListarComponent,
    EmpleadoEliminarComponent,
    EmpleadoEditarComponent,
    EmpleadoHomeComponent,
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule { }
