import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http:HttpClient) { }
  getProductos(){

    return this.http.get("https://localhost:44304/api/productos").toPromise();
  }
  getProductosCriticos(){

    return this.http.get("https://localhost:44304/api/productos/criticos").toPromise();
  }
  getProductosTotal(){

    return this.http.get("https://localhost:44304/api/productos/total").toPromise();
  }
}
