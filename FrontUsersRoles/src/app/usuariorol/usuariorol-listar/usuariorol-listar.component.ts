import { Component, ViewChild } from '@angular/core';
import { UsuarioEditarComponent } from 'src/app/usuario/usuario-editar/usuario-editar.component';
import { UsuariorolEliminarComponent } from '../usuariorol-eliminar/usuariorol-eliminar.component';

import { IUsuarioRol, UsuarioRol } from '../../Intefaces/IUsuarioRol';
import { UsuariorolService } from '../usuariorol.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UsuariorolEditarComponent } from '../usuariorol-editar/usuariorol-editar.component';


@Component({
  selector: 'app-usuariorol-listar',
  templateUrl: './usuariorol-listar.component.html',
  styleUrls: ['./usuariorol-listar.component.css']
})
export class UsuariorolListarComponent {
  displayedColumns: string[] = ['usuarioRolId','usuarioId','usuario','rolId','rol','Acciones'];
  dataSource = new MatTableDataSource<UsuarioRol>();

  constructor(private usuarioRolServicio: UsuariorolService, private dialog: MatDialog){}


  ngOnInit():void{
    this.getResultados();
  }
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  
    }
    
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
  
    getResultados() {
      this.usuarioRolServicio.getUsuariosRoles().subscribe({
        next: (dataResponse: IUsuarioRol) => {
          console.log(this.dataSource.data);
          this.dataSource.data = dataResponse.result;
          console.log(dataResponse.result);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  
  
    actualizarUsuarioRol(usuarioRol: UsuarioRol){
      console.log(usuarioRol);
      this.dialog.open(UsuariorolEditarComponent,{
         data: {
          usuarioId : usuarioRol.usuarioId,
           rolId : usuarioRol.rolId ,
           id: usuarioRol.usuarioRolId,
         }
      });
    } 


    eliminarUsuarioRol (usuarioRol: UsuarioRol){
      console.log(usuarioRol);
      this.dialog.open(UsuariorolEliminarComponent,{
        data:{
          id: usuarioRol.usuarioRolId,
          nombre: usuarioRol.usuario.nombre
        }
      })
         

    }
  }
