import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IRol, Rol } from 'src/app/Intefaces/IRol';
import { RolServiceService } from '../rol-service.service';
import { MatDialog } from '@angular/material/dialog';
import { RolEditarComponent } from '../rol-editar/rol-editar.component';
import { RolEliminarComponent } from '../rol-eliminar/rol-eliminar.component';

@Component({
  selector: 'app-rol-listar',
  templateUrl: './rol-listar.component.html',
  styleUrls: ['./rol-listar.component.css']
})
export class RolListarComponent {
  displayedColumns: string[] = ['rolId','nombre','descripcion','fechaRegistro','fechaActualizacion','Acciones'];
  dataSource = new MatTableDataSource<Rol>();

  constructor(private rolServicio: RolServiceService, private dialog: MatDialog){}


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
      this.rolServicio.getRoles().subscribe({
        next: (dataResponse: IRol) => {
          this.dataSource.data = dataResponse.result;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  
  
    actualizarRol(rol: Rol){
      console.log(rol);
      this.dialog.open(RolEditarComponent,{
        data: {
          nombre: rol.nombre,
          descripcion: rol.descripcion,
          id: rol.rolId
        }
      });
    } 


    eliminarRol (rol: Rol){
      console.log(rol);
      this.dialog.open(RolEliminarComponent,{
      data:{
        id: rol.rolId,
        nombre: rol.nombre
      }
    })
    }
  }
