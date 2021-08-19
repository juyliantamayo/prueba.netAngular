import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos-total-vendido',
  templateUrl: './productos-total-vendido.component.html',
  styleUrls: ['./productos-total-vendido.component.scss']
})
export class ProductosTotalVendidoComponent implements OnInit {

  orders:any[]=[]
  constructor(private producto:ProductosService) { }

  async ngOnInit(): Promise<void> {
    this.orders=JSON.parse(JSON.stringify(await this.producto.getProductosTotal()));
  }

}
