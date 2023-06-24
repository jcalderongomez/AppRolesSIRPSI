import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './compartido/navbar/navbar.component';
import { SidebarComponent } from './compartido/sidebar/sidebar.component';
import { WrapperComponent } from './compartido/wrapper/wrapper.component';
import { AsideComponent } from './compartido/aside/aside.component';
import { FooterComponent } from './compartido/footer/footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IndexappComponent } from './indexapp/indexapp.component';
import { IndexappModule } from './indexapp/indexapp.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    WrapperComponent,
    AsideComponent,
    FooterComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    HttpClientModule ,
    IndexappModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
