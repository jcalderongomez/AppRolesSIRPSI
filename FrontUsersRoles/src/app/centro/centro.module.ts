import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroCrearComponent } from './centro-crear/centro-crear.component';
import { CentroListarComponent } from './centro-listar/centro-listar.component';
import { CentroEditarComponent } from './centro-editar/centro-editar.component';
import { CentroEliminarComponent } from './centro-eliminar/centro-eliminar.component';
import { CentroHomeComponent } from './centro-home/centro-home.component';
import { CentroRoutingModule } from './centro-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    CentroCrearComponent,
    CentroListarComponent,
    CentroEditarComponent,
    CentroEliminarComponent,
    CentroHomeComponent
  ],
  imports: [
    CommonModule,
    CentroRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
  ]
})
export class CentroModule { }
