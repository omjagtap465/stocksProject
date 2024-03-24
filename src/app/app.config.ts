import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { approutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(approutes),
    provideAnimations(),
    provideStore(),
    provideEffects(),
    provideRouterStore(),
    provideHttpClient(),
  ],
};
