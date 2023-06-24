import { Component, Inject } from '@angular/core';
import { UsuarioEliminarComponent } from 'src/app/usuario/usuario-eliminar/usuario-eliminar.component';
import { UsuariorolService } from '../usuariorol.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuariorol-eliminar',
  templateUrl: './usuariorol-eliminar.component.html',
  styleUrls: ['./usuariorol-eliminar.component.css']
})
export class UsuariorolEliminarComponent {
  nombre: string = '';
  id: number=0;
  opcionesMinisterio: any[]=[];

  selectedEstado= '';
  ministerioServicio: any;
  constructor(
              private dialogref: MatDialogRef<UsuarioEliminarComponent>,
              private usuarioRolService: UsuariorolService,
              private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id:number
    }){
      
    }

    ngOnInit() {
      this.id     = this.data.id;
      this.nombre = this.data.nombre;

    }
  

    eliminarUsuarioRol(){
      this.dialogref.close();
      this.usuarioRolService.delete(this.id).subscribe({
        next:(data)=>{
          Swal.fire({
            icon: 'success',
            title: 'Rol de Usuario eliminado con éxito',
            showConfirmButton: true,
          });
        }
      })
      this.router.navigate(['../usuariorol/listar']);
      window.location.reload();
    }
}