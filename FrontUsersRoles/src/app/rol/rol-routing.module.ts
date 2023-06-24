import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolHomeComponent } from './rol-home/rol-home.component';
import { RolListarComponent } from './rol-listar/rol-listar.component';
import { RolCrearComponent } from './rol-crear/rol-crear.component';
import { RolEditarComponent } from './rol-editar/rol-editar.component';
import { RolEliminarComponent } from './rol-eliminar/rol-eliminar.component';

const routes: Routes= [
  {
    path: '', component: RolHomeComponent, 
    children: [
      { path: 'listar', component: RolListarComponent },
      { path: 'crear', component: RolCrearComponent },
      { path: 'editar/:id', component: RolEditarComponent },
      { path: 'eliminar/:id', component: RolEliminarComponent },
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
export class RolRoutingModule { }
