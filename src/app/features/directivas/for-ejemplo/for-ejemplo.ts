import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-for-ejemplo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './for-ejemplo.html',
  styleUrl: './for-ejemplo.css'
})
export class ForEjemplo {
  productos = [
    {id: 1, nombre: 'Laptop', precio: 3200},
    {id: 2, nombre: 'Mouse', precio: 150},
    {id: 3, nombre: 'Teclado', precio: 300},
    {id: 4, nombre: 'Monitor', precio: 1200},
    {id: 5, nombre: 'Ventilador', precio: 300},
  ]
}
