import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HeaderService } from '../../service/header.service';
import {
  WatchlistStock,
  WatchlistStockResponse,
} from '../types/watchlistStocks.interface';
import { StockItem } from '../../types/stockItem.interface';
import {
  AddStockWatchlist,
  AddStockWatchlistStockResponse,
} from '../types/addStock.interface';
@Injectable({
  providedIn: 'root',
})
export class WatchlistStocksService {
  constructor(private http: HttpClient, private headerService: HeaderService) {}

  getUserWatchlistData(id: number | undefined): Observable<WatchlistStock[]> {
    const apiUrl = `http://localhost:3000/api/v1/getwatchlistdata`;
    const headers = this.headerService.getHeaders();
    const body = { id: id };
    return this.http
      .post<WatchlistStockResponse>(apiUrl, body)
      .pipe(map((response) => response.data));
  }
  addStockToWatchlist(stock: StockItem): Observable<AddStockWatchlist> {
    const apiUrl = `http://localhost:3000/api/v1/getwatchlistdata`;
    const body = { stock };
    return this.http
      .post<AddStockWatchlistStockResponse>(apiUrl, body)
      .pipe(map((response) => response.data));
  }
}
