import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MinisterioServiceService } from '../ministerio-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ministerio-eliminar',
  templateUrl: './ministerio-eliminar.component.html',
  styleUrls: ['./ministerio-eliminar.component.css']
})
export class MinisterioEliminarComponent {
  nombre: string = '';
  id: number=0;
  

  constructor(
    private dialogref: MatDialogRef<MinisterioEliminarComponent>,
    private ministerioService: MinisterioServiceService,
    private router: Router,
@Inject(MAT_DIALOG_DATA) private data: {nombre: string, id:number
}){

}

  ngOnInit() {
    this.id     = this.data.id;
    this.nombre = this.data.nombre;

  }


  eliminarMinisterio(){
    this.dialogref.close();
    this.ministerioService.delete(this.id).subscribe({
      next:(data)=>{
        Swal.fire({
          icon: 'success',
          title: 'Empresa eliminada con éxito',
          showConfirmButton: true,
        });
      }
    })
    this.router.navigate(['../ministerio/listar']);
    window.location.reload();
  }
}