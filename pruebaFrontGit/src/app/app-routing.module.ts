import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFrecuenciaComponent } from './components/cliente-frecuencia/cliente-frecuencia.component';
import { ClientesMenoresComponent } from './components/clientes-menores/clientes-menores.component';
import { ProductosCriticosComponent } from './components/productos-criticos/productos-criticos.component';
import { ProductosTotalVendidoComponent } from './components/productos-total-vendido/productos-total-vendido.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path:'',component:ProductosComponent},
  {path:'productosCriticos',component:ProductosCriticosComponent},
  {path:'productosTotalVendido',component:ProductosTotalVendidoComponent},
  {path:'clienteFrecuencia',component:ClienteFrecuenciaComponent},
  {path:'clientesMenores',component:ClientesMenoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
