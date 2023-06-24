import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisterioHomeComponent } from './ministerio-home/ministerio-home.component';
import { MinisterioListarComponent } from './ministerio-listar/ministerio-listar.component';
import { MinisterioCrearComponent } from './ministerio-crear/ministerio-crear.component';
import { MinisterioEditarComponent } from './ministerio-editar/ministerio-editar.component';
import { MinisterioEliminarComponent } from './ministerio-eliminar/ministerio-eliminar.component';

const routes: Routes= [
  {
    path: '', component: MinisterioHomeComponent, 
    children: [
      { path: 'listar', component: MinisterioListarComponent },
      { path: 'crear', component: MinisterioCrearComponent },
      { path: 'editar/:id', component: MinisterioEditarComponent },
      { path: 'eliminar/:id', component: MinisterioEliminarComponent },
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
export class MinisterioRoutingModule { }
