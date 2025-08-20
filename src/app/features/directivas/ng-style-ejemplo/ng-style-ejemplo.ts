import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ng-style-ejemplo',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ng-style-ejemplo.html',
  styleUrl: './ng-style-ejemplo.css'
})
export class NgStyleEjemplo {
  fuenteGrande: boolean = false;
  obtenerEstilos(){
    return {
      'font-size': this.fuenteGrande ? '24px': '14px',
      'color': this.fuenteGrande ? '#0d6efd' : '#6c757d',
      'background-color': '#f8f9fa',
      'padding': '10px',
      'border-radius': '5px'
    };
  }
  alternarTamanio(){
    this.fuenteGrande = !this.fuenteGrande;
  }

}
