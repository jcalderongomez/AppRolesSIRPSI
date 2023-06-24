import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IMinisterio, Ministerio } from 'src/app/Intefaces/IMinisterio';
import { MinisterioServiceService } from '../ministerio-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MinisterioEditarComponent } from '../ministerio-editar/ministerio-editar.component';
import { MinisterioEliminarComponent } from '../ministerio-eliminar/ministerio-eliminar.component';

@Component({
  selector: 'app-ministerio-listar',
  templateUrl: './ministerio-listar.component.html',
  styleUrls: ['./ministerio-listar.component.css']
})

export class MinisterioListarComponent implements AfterViewInit { 
  displayedColumns: string[] = ['ministerioId','nombre','nit','fechaRegistro','fechaActualizacion','Acciones'];
  dataSource = new MatTableDataSource<Ministerio>();

  constructor(private ministerioServicio: MinisterioServiceService, private dialog: MatDialog){}
  

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
    this.ministerioServicio.getMinisterios().subscribe({
      next: (dataResponse: IMinisterio) => {
        this.dataSource.data = dataResponse.result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarMinisterio(ministerio: Ministerio){
    console.log(ministerio);
    this.dialog.open(MinisterioEditarComponent,{
      data: {
        Nombre: ministerio.nombre,
        Nit: ministerio.nit,
        MinisterioId: ministerio.ministerioId
      }
    });
  }

  eliminarMinisterio(ministerio: Ministerio){
    console.log(ministerio);
    this.dialog.open(MinisterioEliminarComponent,{
      data:{
        MinisterioId: ministerio.ministerioId,
        Nombre: ministerio.nombre
      }
    })
  }
}

  