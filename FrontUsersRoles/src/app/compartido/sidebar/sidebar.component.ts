import { Component } from '@angular/core';

import { LoginService } from 'src/app/auth/login/login.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent {
  constructor(public auth: LoginService){}

  logout(){
    this.auth.logout();
  }
}
