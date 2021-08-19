import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-cliente-frecuencia',
  templateUrl: './cliente-frecuencia.component.html',
  styleUrls: ['./cliente-frecuencia.component.scss']
})
export class ClienteFrecuenciaComponent implements OnInit {
  orders:any[]=[]
  constructor(private clientService:ClientesService) { }

  async ngOnInit(): Promise<void> {
    console.log((await this.clientService.getClienteFrecuencia()))
    this.orders=JSON.parse(JSON.stringify(await this.clientService.getClienteFrecuencia()));
  }

}
