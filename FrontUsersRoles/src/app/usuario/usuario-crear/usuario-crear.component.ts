import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from '../usuario-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent {
  usuarioForm: FormGroup;
  selectedEstado : boolean= false;

  constructor(private usuarioServicio: UsuarioServiceService, 
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.usuarioForm = this.formBuilder.group({
        Nombre: new FormControl('', Validators.required),
        Cedula: new FormControl('', Validators.required),
        Email: new FormControl('', Validators.required),
        UserName: new FormControl('', Validators.required),
        Password: new FormControl('', Validators.required),
        Estado: new FormControl('', Validators.required),
      });
    }
   
   
    onSubmit(){
      console.log(this.usuarioForm.value);
      this.usuarioServicio.add(this.usuarioForm.value).subscribe((data:any)=> {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creada con éxito',
          showConfirmButton: true
        })
        this.router.navigate(['../usuario/listar'])
      })
        
    }
  }
