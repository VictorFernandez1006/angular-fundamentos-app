import { Component } from '@angular/core';

@Component({
  selector: 'app-input-key-evento',
  standalone: true,
  imports: [],
  templateUrl: './input-key-evento.html',
  styleUrl: './input-key-evento.css'
})
export class InputKeyEvento {
  nombre: string = '';

  actualizarNombre(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    this.nombre = input.value;
  }
}
