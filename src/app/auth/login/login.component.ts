import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  login( ) {
    // e.preventDefault();
    // console.log('submit');
    this.router.navigateByUrl('/');
  }

}
