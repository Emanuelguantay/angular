import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './Servicios/loginService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angular';


  constructor(private loginService: LoginService){
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCY0wqZyrsjK7Wji553FFB8PNWyqcMONJo",
      authDomain: "people-list-3a6f4.firebaseapp.com",
    })
  }

  isAuthenticated(){
    return this.loginService.isAuthenticated();
  }

  logout(){
    this.loginService.logout();
  }
}
