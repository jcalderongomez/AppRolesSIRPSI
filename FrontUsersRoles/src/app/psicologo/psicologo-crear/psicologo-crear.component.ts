import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Intefaces/IUsuario';
import { CentroService } from 'src/app/centro/centro.service';
import { UsuarioServiceService } from 'src/app/usuario/usuario-service.service';
import { PsicologoServiceService } from '../psicologo-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-psicologo-crear',
  templateUrl: './psicologo-crear.component.html',
  styleUrls: ['./psicologo-crear.component.css']
})
export class PsicologoCrearComponent {
  psicologoForm: FormGroup;
  usuarios: Usuario[] = [];
  centroApoyo: Usuario[] = [];
  opcionesUsuario: any[]=[];
  opcionesCentro: any[]=[];
  selectedUsuario :any[]=[];
  selectedCentro :any[]=[];
  

  

  constructor(private centroServicio: CentroService, 
              private psicologoService: PsicologoServiceService,
              private usuarioService: UsuarioServiceService,
              private formBuilder: FormBuilder,
              private router: Router) { 
                this.psicologoForm = this.formBuilder.group({
                  matriculaProfesional: new FormControl('', Validators.required),
                  especializacion: new FormControl('', Validators.required),
                  usuarioId: new FormControl('', Validators.required),
                  centroApoyoId: new FormControl('', Validators.required)
                });
              }

  ngOnInit() {
    this.getUsuarios();
    this.getCentrosApoyo();
  }
 
    getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.opcionesUsuario = data.result; // Asigna los datos obtenidos a la variable opciones
      console.log(this.opcionesUsuario);
    });
  }
    getCentrosApoyo() {
      this.centroServicio.getCentrosApoyo().subscribe(data => {
        this.opcionesCentro = data.result; // Asigna los datos obtenidos a la variable opciones
        console.log(this.opcionesCentro);
      });
  
  }

  onSubmit(){
    console.log(this.psicologoForm.value);
    this.psicologoService.add(this.psicologoForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Psicologo creado con éxito',
        showConfirmButton: true
      })
      this.router.navigate(['../psicologo/listar'])
    })
      
  }
}
 
