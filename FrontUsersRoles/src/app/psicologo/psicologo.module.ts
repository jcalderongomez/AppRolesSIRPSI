import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PsicologoHomeComponent } from './psicologo-home/psicologo-home.component';
import { PsicologoEliminarComponent } from './psicologo-eliminar/psicologo-eliminar.component';
import { PsicologoEditarComponent } from './psicologo-editar/psicologo-editar.component';
import { PsicologoListarComponent } from './psicologo-listar/psicologo-listar.component';
import { PsicologoCrearComponent } from './psicologo-crear/psicologo-crear.component';
import { PsicologoRoutingModule } from './psicologo-routing.module';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PsicologoHomeComponent,
    PsicologoEliminarComponent,
    PsicologoEditarComponent,
    PsicologoListarComponent,
    PsicologoCrearComponent
  ],
  imports: [
    CommonModule,
    PsicologoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PsicologoModule { }
