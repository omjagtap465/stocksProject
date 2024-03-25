import { Route } from '@angular/router';

export const approutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./shared/dashboard/dashboard.routes').then(
        (m) => m.dashboardRoutes
      ),
  },
];
