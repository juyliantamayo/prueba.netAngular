import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosCriticosComponent } from './components/productos-criticos/productos-criticos.component';
import { ClientesMenoresComponent } from './components/clientes-menores/clientes-menores.component';
import { ProductosTotalVendidoComponent } from './components/productos-total-vendido/productos-total-vendido.component';
import { ClienteFrecuenciaComponent } from './components/cliente-frecuencia/cliente-frecuencia.component';
import { DxDrawerModule, DxToolbarModule, DxListModule,DxDataGridModule } from "devextreme-angular";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductosCriticosComponent,
    ClientesMenoresComponent,
    ProductosTotalVendidoComponent,
    ClienteFrecuenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDrawerModule,
    DxToolbarModule,
    DxListModule,
    DxDataGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
