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
export class SugerenciasService {
  presURL='https://capriccinomx.firebaseio.com//Sugerencias.json';
  presURL2='https://capriccinomx.firebaseio.com//Sugerencias';
  constructor(private http:HttpClient) { }
  postSugerencias(Documentos:any):Observable<any>{
    return this.http.post<any>(this.presURL,Documentos,httpOptions)
  }
  getSugerencias(){
    return this.http.get(this.presURL).map(res => res);
  }
  delSugerencias(id:String){
    const url=`${this.presURL2}/${id}.json` ;
    return this.http.delete(url);
  }
}
