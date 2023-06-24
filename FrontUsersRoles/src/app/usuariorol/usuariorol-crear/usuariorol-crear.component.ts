import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariorolService } from '../usuariorol.service';
import { UsuarioServiceService } from 'src/app/usuario/usuario-service.service';
import { RolServiceService } from 'src/app/rol/rol-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuariorol-crear',
  templateUrl: './usuariorol-crear.component.html',
  styleUrls: ['./usuariorol-crear.component.css']
})
export class UsuariorolCrearComponent {
  usuarioRolForm: FormGroup;
  opcionesUsuario: any[]=[];
  opcionesRol: any[]=[];
  selectedUsuario :any[]=[];
  selectedRol :any[]=[];
  

  

  constructor(private rolServicio: RolServiceService,
              private usuarioRolService: UsuariorolService,
              private usuarioService: UsuarioServiceService,
              private formBuilder: FormBuilder,
              private router: Router) { 
                this.usuarioRolForm = this.formBuilder.group({
                  usuarioId: new FormControl('', Validators.required),
                  rolId: new FormControl('', Validators.required)
                });
              }

  ngOnInit() {
    this.getUsuarios();
    this.getRoles();
  }
 
    getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.opcionesUsuario = data.result; // Asigna los datos obtenidos a la variable opciones
      console.log(this.opcionesUsuario);
    });
  }
    getRoles() {
      this.rolServicio.getRoles().subscribe(data => {
        this.opcionesRol = data.result; // Asigna los datos obtenidos a la variable opciones
        console.log(this.opcionesRol);
      });
  
  }

  onSubmit(){
    console.log(this.usuarioRolForm.value);
    this.usuarioRolService.add(this.usuarioRolForm.value).subscribe((data:any)=> {
      Swal.fire({
        icon: 'success',
        title: 'Rol de usuario creado con éxito',
        showConfirmButton: true
      })
      this.router.navigate(['../usuariorol/listar'])
    })
      
  }
}
 
