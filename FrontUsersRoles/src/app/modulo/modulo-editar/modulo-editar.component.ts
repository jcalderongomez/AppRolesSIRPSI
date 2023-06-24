import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModuloEliminarComponent } from '../modulo-eliminar/modulo-eliminar.component';
import { ModuloServiceService } from '../modulo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-editar',
  templateUrl: './modulo-editar.component.html',
  styleUrls: ['./modulo-editar.component.css']
})
export class ModuloEditarComponent {
  formModulo: FormGroup;
  id: number;
  constructor(private fb: FormBuilder, 
              private dialogref: MatDialogRef<ModuloEliminarComponent>,
              private moduloService: ModuloServiceService,
              private router : Router,
    @Inject(MAT_DIALOG_DATA) private data: {nombre: string, descripcion: string, id:number
    }){
      this.id= data.id;

      console.log("valor que llega: "+ this.id);
      this.formModulo = fb.group({
        nombre: [data.nombre,Validators.required],
        descripcion:  [data.descripcion,Validators.required]
      })
    }
  ngOnInit(): void {
  
  }

  cerrar(){
    this.dialogref.close()
  }

  guardar(){
    this.formModulo.value.id= this.id;    
    this.moduloService.update(this.id, this.formModulo.value).subscribe((data)=>{
      this.router.navigate(['../rol/listar'])
      window.location.reload()
    });
  }

}
