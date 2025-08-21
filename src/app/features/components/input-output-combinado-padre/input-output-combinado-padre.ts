import { Component } from '@angular/core';
import { InputOutputCombinado } from '../input-output-combinado/input-output-combinado';
import { ComunicacionInput } from "../comunicacion-input/comunicacion-input";
@Component({
  selector: 'app-input-output-combinado-padre',
  standalone: true,
  imports: [InputOutputCombinado, ComunicacionInput],
  templateUrl: './input-output-combinado-padre.html',
  styleUrl: './input-output-combinado-padre.css'
})
export class InputOutputCombinadoPadre {
  usuario = {
    nombre: 'Victor',
    edad: 31
  };
  saludoDelHijo: string = '';
  recibirSaludo(mensaje: string): void{
    this.saludoDelHijo = mensaje;
  }
}
