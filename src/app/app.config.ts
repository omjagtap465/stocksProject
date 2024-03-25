import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { approutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  getCurrentUserEffect,
  loginEffects,
  redirectAfterLoginEffect,
  redirectCurrentUserEffect,
} from './auth/store/effect';
import { authFeatureKey, authReducer } from './auth/store/reducer';
import { authInterceptor } from './shared/service/auth.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    // provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(approutes),
    provideAnimations(),
    provideStore({
      router: routerReducer,
    }),

    provideEffects({ loginEffects, redirectAfterLoginEffect }),
    provideEffects({ getCurrentUserEffect, redirectCurrentUserEffect }),
    provideRouterStore(),
    provideHttpClient(),
    provideState(authFeatureKey, authReducer),
  ],
};
