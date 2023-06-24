import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaHomeComponent } from './empresa-home/empresa-home.component';
import { EmpresaListarComponent } from './empresa-listar/empresa-listar.component';
import { EmpresaCrearComponent } from './empresa-crear/empresa-crear.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { EmpresaEliminarComponent } from './empresa-eliminar/empresa-eliminar.component';

const routes: Routes= [
  {
    path: '', component: EmpresaHomeComponent, 
    children: [
      { path: 'listar', component: EmpresaListarComponent },
      { path: 'crear', component: EmpresaCrearComponent },
      { path: 'editar/:id', component: EmpresaEditarComponent },
      { path: 'eliminar/:id', component: EmpresaEliminarComponent },
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
export class EmpresaRoutingModule { }
