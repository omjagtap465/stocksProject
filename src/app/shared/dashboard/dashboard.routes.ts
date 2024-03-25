import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
export const dashboardRoutes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
  },
];
