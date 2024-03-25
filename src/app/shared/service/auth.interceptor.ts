import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserTokenService } from './userTokenService.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const userTokenService = inject(UserTokenService);
  const token = userTokenService.get('accessToken');
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });
  return next(request);
};
