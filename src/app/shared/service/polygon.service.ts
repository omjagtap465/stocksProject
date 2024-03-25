import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { StockResponseInterface } from '../types/stocksResponse.interface';
import { StockItem } from '../types/stockItem.interface';

@Injectable({
  providedIn: 'root',
})
export class PolygonService {
  constructor(private http: HttpClient) {}

  getStocks(): Observable<StockItem[]> {
    const polygonUrl = `https://api.polygon.io/v3/reference/tickers?active=true&apiKey=cS96spZmiDdDp_JCgz_hftVHFURRFsGs&limit=30`;

    return this.http
      .get<StockResponseInterface>(polygonUrl)
      .pipe(map((response) => response.results));
  }
}
