import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';




@NgModule({
  declarations: [
    LoginComponent,
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers:[
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  
 exports:[
    LoginComponent
 ]
})
export class AuthModule { }
