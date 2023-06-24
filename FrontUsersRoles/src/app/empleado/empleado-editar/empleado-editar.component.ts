import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Intefaces/IUsuario';
import { RolServiceService } from 'src/app/rol/rol-service.service';
import { UsuarioServiceService } from 'src/app/usuario/usuario-service.service';
import { UsuariorolService } from 'src/app/usuariorol/usuariorol.service';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styleUrls: ['./empleado-editar.component.css']
})
export class EmpleadoEditarComponent {

  form: FormGroup;
  id: number=0;

  opcionesUsuarios: any[]=[];
  opcionesRoles: any[]=[];
  listaUsuarios: Usuario[]=[]
  selectedEstado= '';
  ministerioServicio: any;
  constructor(private fb: FormBuilder, 
              private dialogref: MatDialogRef<EmpleadoEditarComponent>,
              private usuarioService: UsuarioServiceService,
              private usuarioRolService: UsuariorolService,
              private rolService: RolServiceService,
              private router : Router,
              @Inject(MAT_DIALOG_DATA) private data: {usuarioId: number, rolId: number, id:number}){
                this.id= data.id;
                alert(this.id);
                this.form = this.fb.group({
                usuarioId:       [data.usuarioId,Validators.required],
                rolId:          [data.rolId,Validators.required],
                
              })
  }

  ngOnInit() {
    this.cargarUsuarios();
    this.cargarRoles();
    this.form.patchValue({
      UsuarioId: this.data.id,
      RolId: this.data.rolId
    })
  }

  cerrar(){
    this.dialogref.close();
  }

  cargarUsuarios(){
    this.usuarioService.getUsuarios().subscribe({
      next:(data)=>{
        this.opcionesUsuarios = data.result;
        console.log(this.opcionesUsuarios);
    }, error:(e)=>{}
  })
  }

  cargarRoles(){
    this.rolService.getRoles().subscribe({
      next:(data)=>{
        this.opcionesRoles = data.result;
        console.log(this.opcionesRoles);
    }, error:(e)=>{}
  })
  }
  


  guardar(){
     this.form.value.EmpresaId= this.id;    
     this.usuarioRolService.update(this.id, this.form.value).subscribe((data)=>{
       this.router.navigate(['../usuariorol/listar'])
       window.location.reload()
     });
  }

}
