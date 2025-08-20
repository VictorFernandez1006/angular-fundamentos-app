import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-evento',
  standalone: true,
  imports: [],
  templateUrl: './contador-evento.html',
  styleUrl: './contador-evento.css'
})
export class ContadorEvento {
  contador: number = 0;
  incrementar(): void {
    this.contador ++;
  }
  decrementar(): void {
    this.contador --;
  }
  resetear(): void {
    this.contador = 0;
  }
}
