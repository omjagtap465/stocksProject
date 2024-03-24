import { Route } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
export const loginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];
export const registerRoutes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
  },
];
