import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes-menores',
  templateUrl: './clientes-menores.component.html',
  styleUrls: ['./clientes-menores.component.scss']
})
export class ClientesMenoresComponent implements OnInit {

  orders:any[]=[]
  constructor(private clientService:ClientesService) { }

  async ngOnInit(): Promise<void> {
    console.log((await this.clientService.getClienteMenores()))
    this.orders=JSON.parse(JSON.stringify(await this.clientService.getClienteMenores()));
  }

}
