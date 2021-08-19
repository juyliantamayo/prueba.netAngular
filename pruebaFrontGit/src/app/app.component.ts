import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaFront';
  navigation: any[] = [
    { id: 1, text: "Productos ", path: "" },
    { id: 2, text: "Productos Criticos",  path: "productosCriticos" },
    { id: 3, text: "Productos Total Vendido",  path: "productosTotalVendido" },
    { id: 4, text: "Cliente Frecuencia", path: "clienteFrecuencia" },
    { id: 4, text: "Cliente Menores", path: "clientesMenores" }
];
isDrawerOpen: boolean = false;
buttonOptions: any = {
    icon: "menu",
    onClick: () => {
        this.isDrawerOpen = !this.isDrawerOpen;
    }
}
}
