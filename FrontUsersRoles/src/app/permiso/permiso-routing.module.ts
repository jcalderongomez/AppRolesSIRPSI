import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoHomeComponent } from './permiso-home/permiso-home.component';
import { PermisoListarComponent } from './permiso-listar/permiso-listar.component';
import { PermisoCrearComponent } from './permiso-crear/permiso-crear.component';
import { PermisoEditarComponent } from './permiso-editar/permiso-editar.component';
import { PermisoEliminarComponent } from './permiso-eliminar/permiso-eliminar.component';

const routes: Routes= [
  {
    path: '', component: PermisoHomeComponent, 
    children: [
      { path: 'listar', component: PermisoListarComponent },
      { path: 'crear', component: PermisoCrearComponent },
      { path: 'editar/:id', component: PermisoEditarComponent },
      { path: 'eliminar/:id', component: PermisoEliminarComponent },
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
export class PermisoRoutingModule { }
