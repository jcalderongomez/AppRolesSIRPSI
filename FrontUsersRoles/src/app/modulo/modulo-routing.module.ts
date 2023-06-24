import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloHomeComponent } from './modulo-home/modulo-home.component';
import { ModuloListarComponent } from './modulo-listar/modulo-listar.component';
import { ModuloCrearComponent } from './modulo-crear/modulo-crear.component';
import { ModuloEditarComponent } from './modulo-editar/modulo-editar.component';
import { ModuloEliminarComponent } from './modulo-eliminar/modulo-eliminar.component';

const routes: Routes= [
  {
    path: '', component: ModuloHomeComponent, 
    children: [
      { path: 'listar', component: ModuloListarComponent },
      { path: 'crear', component: ModuloCrearComponent },
      { path: 'editar/:id', component: ModuloEditarComponent },
      { path: 'eliminar/:id', component: ModuloEliminarComponent },
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
export class ModuloRoutingModule { }
