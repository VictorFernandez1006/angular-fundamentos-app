import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-interpolacion-ejemplo.component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interpolacion-ejemplo.component.html',
  styleUrl: './interpolacion-ejemplo.component.css'
})
export class InterpolacionEjemploComponent {
  titulo: string = 'Ejemplo de Interpolación';
  nombre: string = 'Victor';
  edad: number = 31;

  saludar(): string {
    return `Hola, ${this.nombre}`;
  }
}
