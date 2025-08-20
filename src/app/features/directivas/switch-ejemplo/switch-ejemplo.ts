import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-ejemplo',
  standalone: true,
  imports: [],
  templateUrl: './switch-ejemplo.html',
  styleUrl: './switch-ejemplo.css'
})
export class SwitchEjemplo {
  estado: string = 'pendiente';

  cambiarEstado(): void {
    const estados = ['pendiente', 'en-proceso', 'completada'];
    const indice = estados.indexOf(this.estado);
    this.estado = estados[(indice + 1) % estados.length];
  }
}
