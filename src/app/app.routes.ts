import { Routes } from '@angular/router';
import { InterpolacionPageComponent } from './features/interpolaciones/interpolacion-page/interpolacion-page.component';
import { InterpolacionEjemploComponent } from './features/interpolaciones/interpolacion-ejemplo/interpolacion-ejemplo.component';

export const routes: Routes = [
  {
    path: 'interpolacion',
    component: InterpolacionPageComponent,
    children: [
      {path: 'ejemplo',
        component: InterpolacionEjemploComponent
      }
    ]
  }
];
