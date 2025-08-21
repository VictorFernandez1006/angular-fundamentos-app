import { Component } from '@angular/core';
import { ComunicacionInput } from '../comunicacion-input/comunicacion-input';
@Component({
  selector: 'app-comunicacion-input-padre',
  standalone: true,
  imports: [ComunicacionInput],
  templateUrl: './comunicacion-input-padre.html',
  styleUrl: './comunicacion-input-padre.css'
})
export class ComunicacionInputPadre {
  titulo: string = 'Información del usuario';
  usuario = {
    nombre: 'Victor',
    edad: 31
  };
}
