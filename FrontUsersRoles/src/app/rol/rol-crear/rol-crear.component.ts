import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RolServiceService } from '../rol-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-rol-crear',
  templateUrl: './rol-crear.component.html',
  styleUrls: ['./rol-crear.component.css']
})
export class RolCrearComponent {
  rolForm: FormGroup;

  constructor(private rolService: RolServiceService, 
    private formBuilder: FormBuilder,
    private router: Router) { 
    this.rolForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.rolForm.value);

    this.rolService.add(this.rolForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Rol creado con éxito',
        showConfirmButton: true,
        
      })
    
      this.router.navigate(['../rol/listar'])
    })
  }
}