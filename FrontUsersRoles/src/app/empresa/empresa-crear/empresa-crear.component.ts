import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmpresa, Ministerio } from 'src/app/Intefaces/IEmpresa';

import Swal from 'sweetalert2';
import { EmpresaServiceService } from '../empresa.service';
import { MinisterioServiceService } from 'src/app/ministerio/ministerio.service';



@Component({
  selector: 'app-empresa-crear',
  templateUrl: './empresa-crear.component.html',
  styleUrls: ['./empresa-crear.component.css']
})
export class EmpresaCrearComponent {
  
  empresaForm: FormGroup;
  ministerios: Ministerio[] = [];
  opciones: any[]=[];
  selectedMinisterio = '';
  selectedEstado : boolean= false;
  seleccionada: string = this.opciones[0];
  selectedOption!: IEmpresa[];

  constructor(private ministerioServicio: MinisterioServiceService, 
    private empresaServicio: EmpresaServiceService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.empresaForm = this.formBuilder.group({
        Nombre: new FormControl('', Validators.required),
        Nit: new FormControl('', Validators.required),
        Estado: new FormControl('', Validators.required),
        MinisterioId: new FormControl('',Validators.required),
      });
    }
    ngOnInit() {
      this.getMinisterios();
    }
   
    getMinisterios() {
      this.ministerioServicio.getMinisterios().subscribe(data => {
        this.opciones = data.result; // Asigna los datos obtenidos a la variable opciones
        console.log(this.opciones);
      });
    }
  
    onSubmit(){
      console.log(this.empresaForm.value);
      this.empresaServicio.add(this.empresaForm.value).subscribe((data:any)=> {
        Swal.fire({
          icon: 'success',
          title: 'Empresa creada con éxito',
          showConfirmButton: true
        })
        this.router.navigateByUrl('inicio/empresa/listar');
      })
    }
  }
   
  