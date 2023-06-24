import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent {
  
  form: FormGroup;
  id: number=0;

  constructor(private fb: FormBuilder, 
              private usuarioService: UsuarioServiceService,
              private dialogref: MatDialogRef<UsuarioEditarComponent>,
              private router : Router,
              @Inject(MAT_DIALOG_DATA) private data: {nombre: string, cedula: string, email:number, 
                                                      userName:string, password:number, usuarioId:number}){
                this.id= data.usuarioId;
                this.form = this.fb.group({
                Nombre:       [data.nombre,Validators.required],
                Cedula:       [data.cedula,Validators.required],
                Email:        [data.email,Validators.required],
                UserName:     [data.userName,Validators.required],
                Password: [data.password,Validators.required],
              })
  }

  ngOnInit() {
    this.form.patchValue({
      UsuarioId: this.data.usuarioId,
      Nombre: this.data.nombre,
      Cedula: this.data.cedula,
      Email: this.data.email,
      UserName: this.data.userName,
      Password: this.data.password
    })
  }

  cerrar(){
    this.dialogref.close();
  }

  
  guardar(){
     this.form.value.UsuarioId= this.id;    
     this.usuarioService.update(this.id, this.form.value).subscribe((data)=>{
       this.router.navigate(['../usuario/listar'])
       window.location.reload()
     });
  }

}
