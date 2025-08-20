import { Routes } from '@angular/router';
import { InterpolacionPageComponent } from './features/interpolaciones/interpolacion-page/interpolacion-page.component';
import { InterpolacionEjemploComponent } from './features/interpolaciones/interpolacion-ejemplo/interpolacion-ejemplo.component';
import { DirectivasPage } from './features/directivas/directivas-page/directivas-page';
import { IfEjemplo } from './features/directivas/if-ejemplo/if-ejemplo';

export const routes: Routes = [
  {
    path: 'interpolacion',
    component: InterpolacionPageComponent,
    children: [
      {path: 'ejemplo',
        component: InterpolacionEjemploComponent
      }
    ]
  },
  {
    path: 'directivas',
    component: DirectivasPage,
    children: [
      {path: 'if-ejemplo',
        component: IfEjemplo
      }
    ]
  }
];
