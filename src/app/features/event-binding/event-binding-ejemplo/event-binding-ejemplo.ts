import { Component } from '@angular/core';
import { ContadorEvento } from '../contador-evento/contador-evento';
@Component({
  selector: 'app-event-binding-ejemplo',
  standalone: true,
  imports: [ContadorEvento],
  templateUrl: './event-binding-ejemplo.html',
  styleUrl: './event-binding-ejemplo.css'
})
export class EventBindingEjemplo {

}
