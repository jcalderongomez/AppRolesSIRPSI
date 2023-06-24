import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroHomeComponent } from './centro-home/centro-home.component';
import { CentroListarComponent } from './centro-listar/centro-listar.component';
import { CentroCrearComponent } from './centro-crear/centro-crear.component';
import { CentroEditarComponent } from './centro-editar/centro-editar.component';
import { CentroEliminarComponent } from './centro-eliminar/centro-eliminar.component';

const routes: Routes= [
  {
    path: '', component: CentroHomeComponent, 
    children: [
      { path: 'listar', component: CentroListarComponent },
      { path: 'crear', component: CentroCrearComponent },
      { path: 'editar/:id', component: CentroEditarComponent },
      { path: 'eliminar/:id', component: CentroEliminarComponent },
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
export class CentroRoutingModule { }
