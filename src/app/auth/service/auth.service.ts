import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable } from 'rxjs';
import { LoginRequestInterface } from '../types/loginRequest.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signUp(data: RegisterRequestInterface): Observable<any> {
    const apiUrl = `http://localhost:3000/api/v1/signup`;
    return this.http.post(apiUrl, data);
  }
  login(data: LoginRequestInterface): Observable<any> {
    const apiUrl = `http://localhost:3000/api/v1/login`;
    return this.http.post(apiUrl, data);
  }
}
