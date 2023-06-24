import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsicologoHomeComponent } from './psicologo-home/psicologo-home.component';
import { PsicologoListarComponent } from './psicologo-listar/psicologo-listar.component';
import { PsicologoCrearComponent } from './psicologo-crear/psicologo-crear.component';
import { PsicologoEditarComponent } from './psicologo-editar/psicologo-editar.component';
import { PsicologoEliminarComponent } from './psicologo-eliminar/psicologo-eliminar.component';

const routes: Routes= [
  {
    path: '', component: PsicologoHomeComponent, 
    children: [
      { path: 'listar', component: PsicologoListarComponent },
      { path: 'crear', component: PsicologoCrearComponent },
      { path: 'editar/:id', component: PsicologoEditarComponent },
      { path: 'eliminar/:id', component: PsicologoEliminarComponent },
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
export class PsicologoRoutingModule { }
