import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioServiceService } from '../usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-eliminar',
  templateUrl: './usuario-eliminar.component.html',
  styleUrls: ['./usuario-eliminar.component.css']
})
export class UsuarioEliminarComponent {
  nombre: string = '';
  id: number=0;
  opcionesMinisterio: any[]=[];
  
  selectedEstado= '';
  ministerioServicio: any;
  constructor( private usuarioService : UsuarioServiceService,
              private dialogref: MatDialogRef<UsuarioEliminarComponent>,
              private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id:number}){}

    ngOnInit() {
      this.id     = this.data.id;
      this.nombre = this.data.nombre;
    }
  
    eliminarUsuario(){
      this.dialogref.close();
      this.usuarioService.delete(this.id).subscribe({
        next:(data)=>{
          Swal.fire({
            icon: 'success',
            title: 'Usuario eliminado con éxito',
            showConfirmButton: true,
          })
          this.router.navigate(['../usuario/listar'])
          window.location.reload();
        }
      })
    }
}