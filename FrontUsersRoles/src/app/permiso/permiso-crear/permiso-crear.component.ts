import { Component } from '@angular/core';
import { PermisoServiceService } from '../permiso-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permiso-crear',
  templateUrl: './permiso-crear.component.html',
  styleUrls: ['./permiso-crear.component.css']
})
export class PermisoCrearComponent {
  permisoForm: FormGroup;
  opciones: any[]=[];
  
  selectedVer = 'true';
  selectedEditar = 'true';
  selectedEliminar = 'true';
  selectedConsultar = 'true';
  selectedEstado = 'true';

  

  constructor(private permisoServicio: PermisoServiceService, 

    private formBuilder: FormBuilder,
    private router: Router) { 
      this.permisoForm = this.formBuilder.group({
        ver: new FormControl('', Validators.required),
        editar: new FormControl('', Validators.required),
        consultar: new FormControl('', Validators.required),
        eliminar: new FormControl('', Validators.required), 
        estado: new FormControl('', Validators.required),
      });
    }
   
  
  
    onSubmit(){
      // console.log(this.empresaForm.value);
      // this.permisoServicio.add(this.permisoForm.value).subscribe((data:any)=> {
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Empresa creada con éxito',
      //     showConfirmButton: true
      //   })
      // })
        
    }
  }
   
  