import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-interpolacion-page.component',
  standalone:true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './interpolacion-page.component.html',
  styleUrl: './interpolacion-page.component.css'
})
export class InterpolacionPageComponent {
  nombre: string = 'Interpolación en Angular';
}
