import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { HeaderService } from '../../service/header.service';
import {
  WatchlistStock,
  WatchlistStockResponse,
} from '../types/watchlistStocks.interface';
import {
  AddStock,
  AddStockWatchlistStockResponse,
} from '../types/addStock.interface';
@Injectable({
  providedIn: 'root',
})
export class WatchlistStocksService {
  constructor(private http: HttpClient, private headerService: HeaderService) {}

  // getUserWatchlistData(id: number | undefined): Observable<WatchlistStock[]> {
  //   const apiUrl = `http://localhost:3000/api/v1/getwatchlistdata`;
  //   // const headers = this.headerService.getHeaders();
  //   const body = { id: id };
  //   return this.http
  //     .post<WatchlistStockResponse>(apiUrl, body)
  //     .pipe(map((response) => response.data));
  // }
  getUserWatchlistData(id: number | undefined): Observable<WatchlistStock[]> {
    const apiUrl = `http://localhost:3000/api/v1/getwatchlistdata`;
    // const headers = this.headerService.getHeaders();
    const body = { id: id };
    return this.http
      .post<WatchlistStockResponse>(apiUrl, body)
      .pipe(map((response) => response.data));
  }
  addStockToWatchlist(stock: AddStock): Observable<WatchlistStock> {
    const apiUrl = `http://localhost:3000/api/v1/addstock`;
    const body = stock;
    return this.http
      .post<AddStockWatchlistStockResponse>(apiUrl, body)
      .pipe(map((response) => response.data));
  }
  deleteStockFromWatchlist(id: number): Observable<{}> {
    const body = { id: id };
    console.log('Request Body:', body);

    return this.http.post('http://localhost:3000/api/v1/del', body).pipe(
      catchError((error) => {
        console.error('Delete stock request failed:', error);
        throw error; // Rethrow the error
      })
    );
  }
}
