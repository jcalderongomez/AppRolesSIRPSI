import { Component, ViewChild } from '@angular/core';
import { Empresa, IEmpresa } from '../../Intefaces/IEmpresa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EmpresaEditarComponent } from '../empresa-editar/empresa-editar.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpresaEliminarComponent } from '../empresa-eliminar/empresa-eliminar.component';
import { EmpresaServiceService } from '../empresa.service';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent {
  displayedColumns: string[] = ['empresaId','nombre','nit','ministerioId','ministerio','estado','fechaRegistro','fechaActualizacion','Acciones'];
  dataSource = new MatTableDataSource<Empresa>();
  

  constructor(private empresaServicio: EmpresaServiceService,
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
    this.empresaServicio.getEmpresas().subscribe({
      next: (dataResponse: IEmpresa) => {
        this.dataSource.data = dataResponse.result;
        console.log(this.dataSource.data)
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  actualizarEmpresa(empresa: Empresa){
      console.log(empresa);
      this.dialog.open(EmpresaEditarComponent,{
        data:{
          nombre: empresa.nombre,
          nit: empresa.nit,
          ministerio: empresa.ministerioId,
          estado: empresa.estado,
          id: empresa.empresaId,
          fechaRegistro: empresa.fechaRegistro,
          fechaActualizacion: empresa.fechaActualizacion
        }
      })
  
  }

  
  eliminarEmpresa(empresa: Empresa){
   
    console.log(empresa);
    this.dialog.open(EmpresaEliminarComponent,{
      data:{
        id: empresa.empresaId,
        nombre: empresa.nombre
      }
    })

}



  
}

  