import { createFeature, createReducer, on } from '@ngrx/store';
import {
  RouterNavigatedAction,
  routerNavigationAction,
} from '@ngrx/router-store';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthStateInterface } from '../types/authState.interface';
import { authActions } from './action';
const initialState: AuthStateInterface = {
  isLoading: false,
  isSubmitting: true,
  currentUser: undefined,
};
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(authActions.getCurrentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.getCurrentUserFailure, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(routerNavigationAction, (state) => ({
      ...state,
    }))
  ),
});
export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectCurrentUser,
  selectIsLoading,
  selectIsSubmitting,
} = authFeature;
