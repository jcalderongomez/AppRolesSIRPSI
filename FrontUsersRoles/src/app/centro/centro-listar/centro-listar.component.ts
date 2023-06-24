import { Component, ViewChild } from '@angular/core';
import { Empresa, IEmpresa } from '../../Intefaces/IEmpresa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CentroService } from '../centro.service';
import { CentroApoyo, ICentroApoyo } from 'src/app/Intefaces/ICentroApoyo';


@Component({
  selector: 'app-centro-listar',
  templateUrl: './centro-listar.component.html',
  styleUrls: ['./centro-listar.component.css']
})
export class CentroListarComponent {
  displayedColumns: string[] = ['centroApoyoId','nombre','empresaId','empresa','fechaRegistro','fechaActualizacion','Acciones'];
  dataSource = new MatTableDataSource<CentroApoyo>();

  constructor(private centroServicio: CentroService){}
  

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
    this.centroServicio.getCentrosApoyo().subscribe({
      next: (dataResponse: ICentroApoyo) => {
        this.dataSource.data = dataResponse.result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarEmpresa(modulo: Empresa){

  }

  
  
  
}

  