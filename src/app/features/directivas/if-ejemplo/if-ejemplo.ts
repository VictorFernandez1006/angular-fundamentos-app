import { Component } from '@angular/core';

@Component({
  selector: 'app-if-ejemplo',
  imports: [],
  templateUrl: './if-ejemplo.html',
  styleUrl: './if-ejemplo.css'
})
export class IfEjemplo {
  mostrar: boolean = true;
  alternar(): void{
    this.mostrar = !this.mostrar;
  }
}
