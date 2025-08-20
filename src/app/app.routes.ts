import { Routes } from '@angular/router';
import { InterpolacionPageComponent } from './features/interpolaciones/interpolacion-page/interpolacion-page.component';
import { InterpolacionEjemploComponent } from './features/interpolaciones/interpolacion-ejemplo/interpolacion-ejemplo.component';
import { DirectivasPage } from './features/directivas/directivas-page/directivas-page';
import { IfEjemplo } from './features/directivas/if-ejemplo/if-ejemplo';
import { ForEjemplo } from './features/directivas/for-ejemplo/for-ejemplo';
import { NgClassEjemplo } from './features/directivas/ng-class-ejemplo/ng-class-ejemplo';
import { NgStyleEjemplo } from './features/directivas/ng-style-ejemplo/ng-style-ejemplo';
import { SwitchEjemplo } from './features/directivas/switch-ejemplo/switch-ejemplo';
import { DeferEjemplo } from './features/directivas/defer-ejemplo/defer-ejemplo';
import { EventBindingPage } from './features/event-binding/event-binding-page/event-binding-page';
import { EventBindingEjemplo } from './features/event-binding/event-binding-ejemplo/event-binding-ejemplo';

export const routes: Routes = [
  {
    path: 'interpolacion',
    component: InterpolacionPageComponent,
    children: [
      {
        path: 'ejemplo',
        component: InterpolacionEjemploComponent
      }
    ]
  },
  {
    path: 'directivas',
    component: DirectivasPage,
    children: [
      {path: 'if-ejemplo', component: IfEjemplo},
      {path: 'for-ejemplo',component: ForEjemplo},
      {path: 'ng-class-ejemplo',component: NgClassEjemplo},
      {path: 'ng-style-ejemplo',component: NgStyleEjemplo},
      {path: 'switch-ejemplo',component: SwitchEjemplo},
      {path: 'defer-ejemplo',component: DeferEjemplo}
    ]
  },
  {
    path: 'event-binding',
    component: EventBindingPage,
    children: [
      {path: 'ejemplo', component: EventBindingEjemplo}
    ]
  }
];
