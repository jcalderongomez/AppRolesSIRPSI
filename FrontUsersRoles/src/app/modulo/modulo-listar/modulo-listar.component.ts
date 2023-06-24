import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import { ModuloServiceService } from '../modulo-service.service';
import { IModulo, Modulo } from 'src/app/Intefaces/IModulo';
import { MatDialog } from '@angular/material/dialog';
import { ModuloEditarComponent } from '../modulo-editar/modulo-editar.component';
import { ModuloCrearComponent } from '../modulo-crear/modulo-crear.component';


@Component({
  selector: 'app-modulo-listar',
  templateUrl: './modulo-listar.component.html',
  styleUrls: ['./modulo-listar.component.css']
})



export class ModuloListarComponent implements AfterViewInit { 
  displayedColumns: string[] = ['moduloId','nombre','descripcion','fechaRegistro','fechaActualizacion','Acciones'];
  dataSource = new MatTableDataSource<Modulo>();

  constructor(private moduloServicio: ModuloServiceService,
    private dialog: MatDialog){}
  

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
    this.moduloServicio.getModulos().subscribe({
      next: (dataResponse: IModulo) => {
        this.dataSource.data = dataResponse.result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  crearModulo(){
    this.dialog.open(ModuloCrearComponent);
  }

  actualizarModulo(modulo : Modulo){
      console.log(modulo);
      this.dialog.open(ModuloEditarComponent,{
        data:{
          nombre: modulo.nombre,
          fechaRegistro: modulo.fechaRegistro,
          fechaActualizacion: modulo.fechaActualizacion,
          descripcion : modulo.descripcion,
          moduloId : modulo.moduloId
        }
      })
  }
  
}

  