import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent  {
  token: string|undefined;
  hide = true;
  captchaForm: FormGroup;
  loginForm: FormGroup;
  loginData = {
    cedula: '75080013',
    userName: 'jcalderon',
    password:'jcalderon',
    aceptacion: Boolean
  }

  constructor(private loginService: LoginService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.token = undefined;
                this.captchaForm= this.formBuilder.group({});
                this.loginForm= this .formBuilder.group({
                  cedula: ['',[Validators.required, this.trimValidator]],
                  userName: ['',[Validators.required, this.trimValidator]],
                  password: ['',[Validators.required, this.trimValidator]],
                  aceptacion: ['',[Validators.required]],
                })
  }
   
  login() {
    this.loginService.login(this.loginData).subscribe((data:any) => {
      localStorage.setItem('userName',data.result.userName);
      localStorage.setItem('token_value',data.result.token);    
      //this.router.navigateByUrl('validar2fa');
      this.router.navigateByUrl('inicio/dashboard');
    },
    (errorData) => 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorData.error.displayMessage
      })      
    );
  }

  trimValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim() !== control.value) {
      return { 'whitespace': true };
    }
    return null;
  }
  
  public send() {
    
    if (this.captchaForm.invalid) {
      console.log("valida form");
      for (const control of Object.keys(this.captchaForm.controls)) {
        this.captchaForm.controls[control].markAsTouched();
      }
      return;
    }
    
    console.log("Token "+ JSON.stringify(this.token) +" generated");
    console.debug(`Token [${this.token}] generated`);
  }
}