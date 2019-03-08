import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  lat: number = 25.5996746;
  lng: number = -109.0510106;
  constructor() { }

  ngOnInit() {
  }

}
