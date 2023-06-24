import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MinisterioServiceService } from '../ministerio-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ministerio-crear',
  templateUrl: './ministerio-crear.component.html',
  styleUrls: ['./ministerio-crear.component.css']
})

export class MinisterioCrearComponent   {
  ministerioForm: FormGroup;

  constructor(private ministerioService: MinisterioServiceService, 
    private formBuilder: FormBuilder,
    private router: Router) { 
    this.ministerioForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      nit: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.ministerioForm.value);

    this.ministerioService.add(this.ministerioForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Ministerio creado con éxito',
        showConfirmButton: true,
      })
    
      this.router.navigate(['../ministerio/listar'])
    })
  }
}