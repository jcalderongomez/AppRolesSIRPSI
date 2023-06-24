import { Component } from '@angular/core';
import { CentroService } from '../centro.service';
import { Empresa, IEmpresa } from 'src/app/Intefaces/IEmpresa';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpresaServiceService } from 'src/app/empresa/empresa.service';

@Component({
  selector: 'app-centro-crear',
  templateUrl: './centro-crear.component.html',
  styleUrls: ['./centro-crear.component.css']
})

export class CentroCrearComponent {
  centroApoyoForm: FormGroup;
  centros: Empresa[] = [];
  opciones: any[]=[];
  selected = 'empresa 1';
  seleccionada: string = this.opciones[0];

  selectedOption!: IEmpresa[];

  constructor(private centroServicio: CentroService, 
              private empresaService: EmpresaServiceService,
              private formBuilder: FormBuilder,
              private router: Router) { 
                this.centroApoyoForm = this.formBuilder.group({
                  nombre: new FormControl('', Validators.required),
                  empresaId: new FormControl('', Validators.required)
                });
              }

  ngOnInit() {
    this.getEmpresas();
  }
 
    getEmpresas() {
    this.empresaService.getEmpresas().subscribe(data => {
      this.opciones = data.result; // Asigna los datos obtenidos a la variable opciones
      console.log(this.opciones);
    });
  }

  onSubmit(){
    console.log(this.centroApoyoForm.value);
    this.centroServicio.add(this.centroApoyoForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Centro de apoyo creado con éxito',
        showConfirmButton: true
      })
      this.router.navigate(['inicio/centro/listar'])
    })
      
  }
}
 
