import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { UserTokenService } from './userTokenService.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private userTokenService: UserTokenService) {}

  // Function to generate HTTP headers with authorization token
  getHeaders(): HttpHeaders {
    // Retrieve the access token from the UserTokenService
    const token = this.userTokenService.get('accessToken');

    // Define the headers with authorization token
    const headers = new HttpHeaders({
      Authorization: token ? `Token ${token}` : '',
    });

    return headers;
  }
}
