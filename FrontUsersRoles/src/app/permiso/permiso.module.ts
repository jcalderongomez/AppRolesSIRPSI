import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermisoCrearComponent } from './permiso-crear/permiso-crear.component';
import { PermisoEditarComponent } from './permiso-editar/permiso-editar.component';
import { PermisoEliminarComponent } from './permiso-eliminar/permiso-eliminar.component';
import { PermisoListarComponent } from './permiso-listar/permiso-listar.component';
import { PermisoHomeComponent } from './permiso-home/permiso-home.component';
import { PermisoRoutingModule } from './permiso-routing.module';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PermisoCrearComponent,
    PermisoEditarComponent,
    PermisoEliminarComponent,
    PermisoListarComponent,
    PermisoHomeComponent
  ],
  imports: [
    CommonModule,
    PermisoRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class PermisoModule { }
