import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
export const authActions = createActionGroup({
  source: 'auth',
  events: {
    login: props<{ request: LoginRequestInterface }>(),
    'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    'Login Failure': emptyProps(),
    'Get Current User': emptyProps(),
    'Get Current User Success': props<{ currentUser: CurrentUserInterface }>(),
    'Get Current User Failure': emptyProps(),
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
