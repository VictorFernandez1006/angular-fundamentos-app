import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './components-page.html',
  styleUrl: './components-page.css'
})
export class ComponentsPage {

}
