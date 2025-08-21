import { Component } from '@angular/core';
import { ComunicacionOutput } from '../comunicacion-output/comunicacion-output';
@Component({
  selector: 'app-comunicacion-output-padre',
  standalone: true,
  imports: [ComunicacionOutput],
  templateUrl: './comunicacion-output-padre.html',
  styleUrl: './comunicacion-output-padre.css'
})
export class ComunicacionOutputPadre {
  mensajeDelHijo: string = '';
  recibirMensaje (mensaje: string): void{
    this.mensajeDelHijo = mensaje;
  }
}
