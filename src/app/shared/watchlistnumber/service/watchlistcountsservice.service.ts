import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WatchlistApiResponse, Watchlist } from '../types/watchlist.interface';
import { HeaderService } from '../../service/header.service';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor(private http: HttpClient, private headerService: HeaderService) {}

  getUserWatchlistData(): Observable<Watchlist[]> {
    const apiUrl = `http://localhost:3000/api/v1/getwatchlistname`;
    const headers = this.headerService.getHeaders();
    return this.http
      .get<WatchlistApiResponse>(apiUrl, { headers })
      .pipe(map((response) => response.data));
  }
}
