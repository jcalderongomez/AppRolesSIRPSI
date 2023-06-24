import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUsuario, Usuario } from 'src/app/Intefaces/IUsuario';
import { UsuarioServiceService } from '../usuario-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { UsuarioEditarComponent } from '../usuario-editar/usuario-editar.component';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioEliminarComponent } from '../usuario-eliminar/usuario-eliminar.component';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent {
  displayedColumns: string[] = ['usuarioId','nombre','cedula','email','userName','password','fechaRegistro','fechaActualizacion','estado','Acciones'];
  dataSource = new MatTableDataSource<Usuario>();

  constructor(private usuarioServicio: UsuarioServiceService,
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
    this.usuarioServicio.getUsuarios().subscribe({
      next: (dataResponse: IUsuario) => {
        this.dataSource.data = dataResponse.result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

eliminarUsuario(usuario: Usuario){
  console.log(usuario);
    this.dialog.open(UsuarioEliminarComponent,{
      data:{
        id: usuario.usuarioId,
        nombre: usuario.nombre
      }
    })
}
  actualizarUsuario(usuario: Usuario){
    console.log(usuario);
    this.dialog.open(UsuarioEditarComponent,{
      data:{
        Nombre: usuario.nombre,
    //     Cedula: usuario.cedula,
    //     Email: usuario.email,
    //     UserN: usuario.userName,
    //     Password: usuario.password
       }
     })
  }
}

  