import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-combinado',
  standalone: true,
  imports: [],
  templateUrl: './input-output-combinado.html',
  styleUrl: './input-output-combinado.css'
})
export class InputOutputCombinado {
  @Input()
  usuario: {nombre:string; edad: number} = {nombre: '', edad: 31};
  @Output()
  saludar = new EventEmitter<string>();

  emitirSaludo(): void {
    this.saludar.emit(`Hola soy ${this.usuario.nombre} y tengo ${this.usuario.edad} años`);
  }

}
