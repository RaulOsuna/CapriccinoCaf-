import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ADMINISTRACIONComponent } from './administracion/administracion.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ADMINISTRACIONComponent,
    SugerenciasComponent,
    NavbarComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSKNno0k2uTLczSQL08pRkCYN_Q419-hg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
