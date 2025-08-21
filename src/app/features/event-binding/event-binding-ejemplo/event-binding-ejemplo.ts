import { Component } from '@angular/core';
import { ContadorEvento } from '../contador-evento/contador-evento';
import { InputKeyEvento } from '../input-key-evento/input-key-evento';
import { SelectChangeEvento } from '../select-change-evento/select-change-evento';
@Component({
  selector: 'app-event-binding-ejemplo',
  standalone: true,
  imports: [ContadorEvento, InputKeyEvento, SelectChangeEvento],
  templateUrl: './event-binding-ejemplo.html',
  styleUrl: './event-binding-ejemplo.css'
})
export class EventBindingEjemplo {

}
