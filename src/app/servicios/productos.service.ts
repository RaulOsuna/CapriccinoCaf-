import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
const httpOptions={
  headers:new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  presURL='https://capriccinomx.firebaseio.com//Productos.json';
  postProductos(Albumes:any):Observable<any>{
    return this.http.post<any>(this.presURL,Albumes,httpOptions)
  }
  getProductos(){
    return this.http.get(this.presURL).map(res => res);
  }
  delProductos(id:String){
    const url=`${this.presURL}/${id}.json` ;
    return this.http.delete(url);
  }
}
