import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usuario:String;
  constructor(

  ) { 
    let usuario=localStorage.getItem("usuario");
    this.usuario=usuario;
  }

  ngOnInit() {
  }
  salir(){
    localStorage.removeItem("usuario");
    window.location.href="/inicio";
  }
}
