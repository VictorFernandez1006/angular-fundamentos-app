import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-ng-class-ejemplo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class-ejemplo.html',
  styleUrl: './ng-class-ejemplo.css'
})
export class NgClassEjemplo {
  estado: string = 'activo';
  alternarEstado(): void {
    this.estado = this.estado === 'activo' ? 'inactivo' : 'activo';
  }
}
