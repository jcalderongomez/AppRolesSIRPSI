import { Component, ViewChild } from '@angular/core';
import { PsicologoServiceService } from '../psicologo-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { IPsicologo, Psicologo } from 'src/app/Intefaces/IPsicologo';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-psicologo-listar',
  templateUrl: './psicologo-listar.component.html',
  styleUrls: ['./psicologo-listar.component.css']
})
export class PsicologoListarComponent {
  displayedColumns: string[] = ['psicologoId','matricula','especializacion','usuario','centroApoyo','Acciones'];
  dataSource = new MatTableDataSource<Psicologo>();

  constructor(private psicologoServicio: PsicologoServiceService){}
  

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
    this.psicologoServicio.getPsicologos().subscribe({
      next: (dataResponse: IPsicologo) => {

        this.dataSource.data = dataResponse.result;
        console.log(this.dataSource.data);

      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarUsuario(modulo: Psicologo){

  } 
}