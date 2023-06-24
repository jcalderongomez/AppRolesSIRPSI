import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from '../empleado.service';
import { MatPaginator } from '@angular/material/paginator';
import { Empleado, IEmpleado } from 'src/app/Intefaces/IEmpleado';

@Component({
  selector: 'app-empleado-listar',
  templateUrl: './empleado-listar.component.html',
  styleUrls: ['./empleado-listar.component.css']
})
export class EmpleadoListarComponent {
  displayedColumns: string[] = ['empleadoId','usuario','centro','Acciones'];
  dataSource = new MatTableDataSource<Empleado>();

  constructor(private empleadoServicio: EmpleadoService){}
  

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
    this.empleadoServicio.getEmpleados().subscribe({
      next: (dataResponse: IEmpleado) => {
        this.dataSource.data = dataResponse.result;
        console.log(this.dataSource.data)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarEmpleado(modulo: Empleado){

  }

  
  
  
}

  