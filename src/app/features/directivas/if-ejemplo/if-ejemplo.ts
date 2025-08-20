import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-if-ejemplo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './if-ejemplo.html',
  styleUrl: './if-ejemplo.css'
})
export class IfEjemplo {
  mostrar: boolean = true;
  alternar(): void{
    this.mostrar = !this.mostrar;
  }
}
