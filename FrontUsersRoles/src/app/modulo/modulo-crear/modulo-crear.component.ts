import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModuloServiceService } from '../modulo-service.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modulo-crear',
  templateUrl: './modulo-crear.component.html',
  styleUrls: ['./modulo-crear.component.css']
})
export class ModuloCrearComponent {
  moduloForm: FormGroup;

  constructor(private moduloService: ModuloServiceService, 
    private formBuilder: FormBuilder,
    private router: Router) { 
    this.moduloForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.moduloForm.value);

    this.moduloService.add(this.moduloForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Ministerio creado con éxito',
        showConfirmButton: true,
      })
    
      this.router.navigate(['../modulo/listar'])
    })
  }
}