import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexapp',
  templateUrl: './indexapp.component.html',
  styleUrls: ['./indexapp.component.css']
})
export class IndexappComponent {
constructor( private router: Router){}
  login(){
    this.router.navigateByUrl('login');
  }
}
