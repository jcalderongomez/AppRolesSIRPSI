import { Component, Inject } from '@angular/core';
import { RolServiceService } from '../rol-service.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol-eliminar',
  templateUrl: './rol-eliminar.component.html',
  styleUrls: ['./rol-eliminar.component.css']
})
export class RolEliminarComponent {
  nombre: string = '';
  id: number=0;
  
  constructor(
              private dialogref: MatDialogRef<RolEliminarComponent>,
              private rolService: RolServiceService,
              private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, id:number
    }){
      
    }

    ngOnInit() {
      this.id     = this.data.id;
      this.nombre = this.data.nombre;
    }


    eliminarRol(){
      this.dialogref.close();
      this.rolService.delete(this.id).subscribe({
        next:(data)=>{
          Swal.fire({
            icon: 'success',
            title: 'Rol eliminado con éxito',
            showConfirmButton: true,
          });
        }
      })
      this.router.navigate(['../rol/listar']);
      window.location.reload();
    }
}