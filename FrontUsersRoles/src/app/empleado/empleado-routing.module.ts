import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListarComponent } from './empleado-listar/empleado-listar.component';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { EmpleadoEliminarComponent } from './empleado-eliminar/empleado-eliminar.component';
import { EmpleadoHomeComponent } from './empleado-home/empleado-home.component';

const routes: Routes= [
  {
    path: '', component: EmpleadoHomeComponent, 
    children: [
      { path: 'listar', component: EmpleadoListarComponent },
      { path: 'crear', component: EmpleadoCrearComponent },
      { path: 'editar/:id', component: EmpleadoEditarComponent },
      { path: 'eliminar/:id', component: EmpleadoEliminarComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class EmpleadoRoutingModule { }