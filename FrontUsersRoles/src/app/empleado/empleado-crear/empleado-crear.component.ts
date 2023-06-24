import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CentroService } from 'src/app/centro/centro.service';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado.service';
import { UsuarioServiceService } from 'src/app/usuario/usuario-service.service';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent {
  empleadoForm: FormGroup;
  opcionesUsuario: any[]=[];
  opcionesCentro: any[]=[];
  selectedUsuario :any[]=[];
  selectedCentro :any[]=[];
  

  

  constructor(private centroServicio: CentroService, 
              private empleadoService: EmpleadoService,
              private usuarioService: UsuarioServiceService,
              private formBuilder: FormBuilder,
              private router: Router) { 
                this.empleadoForm = this.formBuilder.group({
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
    console.log(this.empleadoForm.value);
    this.empleadoService.add(this.empleadoForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Rol de usuario creado con éxito',
        showConfirmButton: true
      })
      this.router.navigate(['../empleado/listar'])
    })
      
  }
}
 
