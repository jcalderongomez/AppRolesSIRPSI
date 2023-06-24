import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/usuario/usuario-service.service';
import { UsuariorolService } from '../usuariorol.service';
import { UsuarioEditarComponent } from 'src/app/usuario/usuario-editar/usuario-editar.component';
import { Rol } from 'src/app/Intefaces/IRol';
import { Usuario } from 'src/app/Intefaces/IUsuario';
import { RolServiceService } from 'src/app/rol/rol-service.service';

@Component({
  selector: 'app-usuariorol-editar',
  templateUrl: './usuariorol-editar.component.html',
  styleUrls: ['./usuariorol-editar.component.css']
})
export class UsuariorolEditarComponent {

  
  form: FormGroup;
  id: number=0;

  opcionesUsuario: any[]=[];
  opcionesRol: any[]=[];
  listaUsuarios: Usuario[]=[]
  listaRoles: Rol[]=[]
  selectedEstado= '';
  ministerioServicio: any;
  constructor(private fb: FormBuilder, 
              private dialogref: MatDialogRef<UsuariorolEditarComponent>,
              private usuarioService: UsuarioServiceService,
              private rolService: RolServiceService,
              private usuarioRolService: UsuariorolService,
              private router : Router,
              @Inject(MAT_DIALOG_DATA) private data: { usuarioId:number, rolId:number, id:number}){
                this.id= data.id;
                this.form = this.fb.group({
                usuarioId:       [data.usuarioId,Validators.required],
                rolId:          [data.rolId,Validators.required],
              })
  }

  ngOnInit() {
    this.cargarUsuarios();
    this.cargarRoles();

    this.form.patchValue({
      UsuarioId: this.data.usuarioId,
      RolId: this.data.rolId      
    })
  }

  cerrar(){
    this.dialogref.close();
  }

  cargarUsuarios(){
    this.usuarioService.getUsuarios().subscribe({
      next:(data)=>{
        this.opcionesUsuario = data.result;
        console.log(this.opcionesUsuario);
    }, error:(e)=>{}
  })
  }
  

  cargarRoles(){
    this.rolService.getRoles().subscribe({
      next:(data)=>{
        this.opcionesRol = data.result;
        console.log(this.opcionesRol);
    }, error:(e)=>{}
  })
  }
  

  guardar(){
    alert(this.id);
     this.form.value.UsuarioRolId= this.id;    
     this.usuarioRolService.update(this.id, this.form.value).subscribe((data)=>{
       this.router.navigate(['../usuariorol/listar'])
       window.location.reload()
     });
  }

}
