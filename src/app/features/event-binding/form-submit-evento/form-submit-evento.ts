import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-submit-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-submit-evento.html',
  styleUrl: './form-submit-evento.css'
})
export class FormSubmitEvento {
  email: string = '';
  emailEnviado: boolean = false;

  enviarFormulario(event: Event): void{
    event.preventDefault();//Evita que se recargue la página
    this.emailEnviado = true;
  }
}
