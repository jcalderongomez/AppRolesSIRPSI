import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinisterioHomeComponent } from './ministerio-home/ministerio-home.component';
import { MinisterioCrearComponent } from './ministerio-crear/ministerio-crear.component';
import { MinisterioListarComponent } from './ministerio-listar/ministerio-listar.component';
import { MinisterioEditarComponent } from './ministerio-editar/ministerio-editar.component';
import { MinisterioEliminarComponent } from './ministerio-eliminar/ministerio-eliminar.component';
import { MinisterioRoutingModule } from './ministerio-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MinisterioHomeComponent,
    MinisterioCrearComponent,
    MinisterioListarComponent,
    MinisterioEditarComponent,
    MinisterioEliminarComponent
  ],
  
  imports: [
    CommonModule,
    MinisterioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  
})
export class MinisterioModule { }
