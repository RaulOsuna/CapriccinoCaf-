import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class ADMINISTRACIONComponent implements OnInit {

  constructor(
    
  ) { 
   if (window.localStorage.getItem("usuario")==null ||window.localStorage.getItem("usuario")==undefined ) {
     window.location.href="/inicio";
   }
  }

  ngOnInit() {
  }

}
