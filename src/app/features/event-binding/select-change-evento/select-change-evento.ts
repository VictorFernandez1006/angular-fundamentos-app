import { Component } from '@angular/core';

@Component({
  selector: 'app-select-change-evento',
  standalone: true,
  imports: [],
  templateUrl: './select-change-evento.html',
  styleUrl: './select-change-evento.css'
})
export class SelectChangeEvento {
  color: string = '';
  cambiarColor(event: Event){
    const select = event.target as HTMLSelectElement;
    this.color = select.value
  }

}
