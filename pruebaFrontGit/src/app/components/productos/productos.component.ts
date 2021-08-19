import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  orders:any[]=[]
  constructor(private producto:ProductosService) { }

  async ngOnInit(): Promise<void> {
    this.orders=JSON.parse(JSON.stringify(await this.producto.getProductos()));
  }

}
