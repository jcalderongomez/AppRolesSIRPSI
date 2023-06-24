import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MinisterioServiceService } from '../ministerio-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ministerio-editar',
  templateUrl: './ministerio-editar.component.html',
  styleUrls: ['./ministerio-editar.component.css']
})
export class MinisterioEditarComponent implements OnInit{
  form: FormGroup;
  MinisterioId: number;
  constructor(private fb: FormBuilder, 
              private dialogref: MatDialogRef<MinisterioEditarComponent>,
              private ministerioService: MinisterioServiceService,
              private router : Router,
    @Inject(MAT_DIALOG_DATA) private data: {Nombre: string, Nit: string, MinisterioId:number
    }){
      this.MinisterioId= data.MinisterioId;

      console.log("valor que llega: "+ this.MinisterioId);
      this.form = fb.group({
        Nombre: [data.Nombre,Validators.required],
        Nit:  [data.Nit,Validators.required]
      })
    }
  ngOnInit(): void {
    this.form.patchValue({
      MinisterioId: this.data.MinisterioId,
      Nombre: this.data.Nombre,
      Nit: this.data.Nit
    })
  }

  cerrar(){
    this.dialogref.close()
  }

  guardar(){
    this.form.value.MinisterioId= this.MinisterioId;    
    this.ministerioService.update(this.MinisterioId, this.form.value).subscribe((data)=>{
      this.router.navigate(['../ministerio/listar'])
      window.location.reload()
    });
  }

}
