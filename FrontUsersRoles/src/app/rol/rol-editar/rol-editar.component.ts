import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolServiceService } from '../rol-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol-editar',
  templateUrl: './rol-editar.component.html',
  styleUrls: ['./rol-editar.component.css']
})
export class RolEditarComponent {
  formRol: FormGroup;
  id: number;
  constructor(private fb: FormBuilder, 
              private dialogref: MatDialogRef<RolEditarComponent>,
              private rolService: RolServiceService,
              private router : Router,
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, nit: string, id:number
    }){
      this.id= data.id;

      console.log("valor que llega: "+ this.id);
      this.formRol = fb.group({
        nombre: [data.nombre,Validators.required],
        descripcion:  [data.nit,Validators.required]
      })
    }
  ngOnInit(): void {
  
  }

  cerrar(){
    this.dialogref.close()
  }

  guardar(){
    this.formRol.value.id= this.id;    
    this.rolService.update(this.id, this.formRol.value).subscribe((data)=>{
      this.router.navigate(['../rol/listar'])
      window.location.reload()
    });
  }

}
