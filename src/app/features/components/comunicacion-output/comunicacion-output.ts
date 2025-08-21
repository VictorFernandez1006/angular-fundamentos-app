import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comunicacion-output',
  standalone: true,
  imports: [],
  templateUrl: './comunicacion-output.html',
  styleUrl: './comunicacion-output.css'
})
export class ComunicacionOutput {
  @Output()
  mensajeEnviado = new EventEmitter<string>();
  enviarSaludo(){
    this.mensajeEnviado.emit('Hola desde el componente hijo');
  }

}
