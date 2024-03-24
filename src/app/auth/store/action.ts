import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register Success': emptyProps(),
    'Register Failure': emptyProps(),
    // Login: props<{ request: LoginRequestInterface }>(),
    // 'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    // 'Login Failure': props<{ errors: BackendErrorsInterface }>(),
    // 'Get Current User': emptyProps(),
    // 'Get Current User Success': props<{ currentUser: CurrentUserInterface }>(),
    // 'Get Current User Failure': emptyProps(),
    // 'Update  User': props<{
    //   currentUserRequest: CurrentUserRequestInterface;
    // }>(),
    // 'Update  User Success': props<{
    //   currentUser: CurrentUserInterface;
    // }>(),
    // 'Update  User Failure': props<{ errors: BackendErrorsInterface }>(),
    // Logout: emptyProps(),
  },
});
