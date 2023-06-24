import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPermiso, Permiso } from 'src/app/Intefaces/IPermiso';
import { PermisoServiceService } from '../permiso-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-permiso-listar',
  templateUrl: './permiso-listar.component.html',
  styleUrls: ['./permiso-listar.component.css']
})
export class PermisoListarComponent {
  displayedColumns: string[] = ['permisoId','ver','editar','consultar','eliminar','estado','fechaRegistro','fechaActualizacion','Acciones'];
  dataSource = new MatTableDataSource<Permiso>();

  constructor(private permisoServicio: PermisoServiceService){}
  

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
    this.permisoServicio.getPermisos().subscribe({
      next: (dataResponse: IPermiso) => {
        this.dataSource.data = dataResponse.result;
        console.log(this.dataSource.data)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarEmpresa(modulo: Permiso){

  }

  
  
  
}

  