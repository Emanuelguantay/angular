import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Servicios/loginService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor( private loginService : LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    const email : string = form.value.email;
    const password : string = form.value.password;
    this.loginService.login(email, password);
  }

}
