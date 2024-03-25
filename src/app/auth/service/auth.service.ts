import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { LoginResponseInterface } from '../../shared/types/loginResponse.interface';
import { HeaderService } from '../../shared/service/header.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private headerService: HeaderService) {}
  getCurrentUser(): Observable<CurrentUserInterface> {
    const apiUrl = `http://localhost:3000/api/v1/getuser`;
    const headers = this.headerService.getHeaders();
    return this.http.get<LoginResponseInterface>(apiUrl, { headers }).pipe(
      map((response: LoginResponseInterface) => {
        return {
          email: response.data.email,
          id: response.data.id,
          newToken: response.data.newToken,
          updatedAt: response.data.updatedAt,
          username: response.data.username,
        };
      })
    );
  }
  signUp(data: RegisterRequestInterface): Observable<any> {
    const apiUrl = `http://localhost:3000/api/v1/signup`;
    return this.http.post(apiUrl, data);
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const apiUrl = `http://localhost:3000/api/v1/login`;
    return this.http.post<LoginResponseInterface>(apiUrl, data).pipe(
      map((response: LoginResponseInterface) => {
        return {
          email: response.data.email,
          id: response.data.id,
          newToken: response.data.newToken,
          updatedAt: response.data.updatedAt,
          username: response.data.username,
        };
      })
    );
  }
}
