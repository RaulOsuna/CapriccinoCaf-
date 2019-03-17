import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import * as firebase from 'firebase';
import {environment} from '../../environments/environment'
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  constructor() { 
    firebase.initializeApp(environment.firebase);
    if (window.localStorage.getItem("usuario")=="admin") {
      window.location.href="/administracion";
    }
  }

  ngOnInit() {
  }
  submit(){
    var email=$('#email').val();
    var password=$('#password').val();

      var inicio=firebase.auth().signInWithEmailAndPassword(String(email),String(password)).then(logueado=>{
        localStorage.setItem("usuario","admin");
        window.location.href='/administracion';

      });

  }
}
