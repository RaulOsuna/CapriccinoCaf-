import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
//servicios
import {SugerenciasService} from '../app/servicios/sugerencias.service';
import {ProductosService} from '../app/servicios/productos.service';
import { HttpClientModule } from '@angular/common/http'; 

//--
import { InicioComponent } from './inicio/inicio.component';
import { ADMINISTRACIONComponent } from './administracion/administracion.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

import { AgmCoreModule } from '@agm/core';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'sugerencias',component:SugerenciasComponent},
  {path:'ubicacion',component:UbicacionComponent},
  {path:'administracion',component:ADMINISTRACIONComponent},
  {path:'inicio',component:InicioComponent},
  {path:'iniciarSesion',component:IniciarSesionComponent},
  {path:'**',component:InicioComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ADMINISTRACIONComponent,
    SugerenciasComponent,
    NavbarComponent,
    UbicacionComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSKNno0k2uTLczSQL08pRkCYN_Q419-hg'
    })
  ],
  providers: [
    ProductosService,
    SugerenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
