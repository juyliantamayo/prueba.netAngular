import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }
  getClienteFrecuencia(){

    return this.http.get("https://localhost:44304/api/cliente/frecuencia").toPromise();
  }
  getClienteMenores(){

    return this.http.get("https://localhost:44304/api/cliente/menores").toPromise();
  }
}
