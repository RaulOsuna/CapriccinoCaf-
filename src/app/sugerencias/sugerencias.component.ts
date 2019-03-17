import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {SugerenciasService} from '../servicios/sugerencias.service';
class sug {
  nombre:String;
  sugerencia:String;
}
@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  constructor(private sugerencia:SugerenciasService) { }

  ngOnInit() {
  }
  enviar(){
    var nombre=$('#name').val();
    var comentario=$('#comment').val();
    if (nombre!="" && comentario!="") {
      let sugerencia1:sug=new sug();
      sugerencia1.nombre=nombre;
      sugerencia1.sugerencia=comentario;
      this.sugerencia.postSugerencias(sugerencia1).subscribe();
      alert("Sugerencia enviada");
    }else{
      alert("No ha ingresado los datos correctamente");
    }
  }
}
