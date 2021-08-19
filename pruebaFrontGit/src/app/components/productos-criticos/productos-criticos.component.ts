import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos-criticos',
  templateUrl: './productos-criticos.component.html',
  styleUrls: ['./productos-criticos.component.scss']
})
export class ProductosCriticosComponent implements OnInit {
  orders:any[]=[]
  constructor(private producto:ProductosService) { }

  async ngOnInit(): Promise<void> {
    this.orders=JSON.parse(JSON.stringify(await this.producto.getProductosCriticos()));
  }

}
