import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comunicacion-input',
  standalone: true,
  imports: [],
  templateUrl: './comunicacion-input.html',
  styleUrl: './comunicacion-input.css'
})
export class ComunicacionInput {
  @Input()
  titulo: string = '';
  @Input()
  usuario: {
    nombre: string;
    edad: number
  } = {nombre: '', edad: 0};
}
