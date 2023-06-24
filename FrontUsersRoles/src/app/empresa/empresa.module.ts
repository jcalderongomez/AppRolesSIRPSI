import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaCrearComponent } from './empresa-crear/empresa-crear.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { EmpresaEliminarComponent } from './empresa-eliminar/empresa-eliminar.component';
import { EmpresaListarComponent } from './empresa-listar/empresa-listar.component';
import { EmpresaHomeComponent } from './empresa-home/empresa-home.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    EmpresaCrearComponent,
    EmpresaEditarComponent,
    EmpresaEliminarComponent,
    EmpresaListarComponent,
    EmpresaHomeComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
