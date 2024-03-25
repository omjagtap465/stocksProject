import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { UserTokenService } from '../../shared/service/userTokenService.service';
import { authActions } from './action';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { Router } from '@angular/router';
export const loginEffects = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    tokenService = inject(UserTokenService)
  ) => {
    return actions$.pipe(
      ofType(authActions.login),
      switchMap(({ request }) => {
        return authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            console.log(currentUser);

            tokenService.set('accessToken', currentUser.newToken);
            return authActions.loginSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(authActions.loginFailure);
          })
        );
      })
    );
  },
  { functional: true }
);
export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.loginSuccess),
      tap(() => {
        router.navigateByUrl('/dashboard');
      })
    );
  },
  { functional: true, dispatch: false }
);
export const getCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    tokenService = inject(UserTokenService)
  ) => {
    return actions$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        const token = tokenService.get('accessToken');
        if (!token) {
          return of(authActions.getCurrentUserFailure());
        }
        return authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.getCurrentUserSuccess({ currentUser });
          }),
          catchError(() => {
            return of(authActions.getCurrentUserFailure());
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectCurrentUserEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return merge(
      actions$.pipe(ofType(authActions.getCurrentUserSuccess)),
      actions$.pipe(ofType(authActions.getCurrentUserFailure))
    ).pipe(
      tap((action) => {
        if (action.type === authActions.getCurrentUserSuccess.type) {
          router.navigateByUrl('/dashboard');
        } else if (action.type === authActions.getCurrentUserFailure.type) {
          router.navigateByUrl('/login');
        }
      })
    );
  },
  { functional: true, dispatch: false }
);
