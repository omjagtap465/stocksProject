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
import {
  SingleStockApiResponse,
  SingleStockFilteredResponseInterface,
  SingleStockInterface,
} from '../types/singlestock.interface';

@Injectable({
  providedIn: 'root',
})
export class PolygonService {
  constructor(private http: HttpClient) {}
  stockResponse: SingleStockInterface | undefined;
  getStocks(): Observable<StockItem[]> {
    const polygonUrl = `https://api.polygon.io/v3/reference/tickers?active=true&apiKey=cS96spZmiDdDp_JCgz_hftVHFURRFsGs&limit=30`;

    return this.http
      .get<StockResponseInterface>(polygonUrl)
      .pipe(map((response) => response.results));
  }
  getSingleStock(stockName: string): Observable<StockItem[]> {
    const polygonUrl = `https://api.polygon.io/v3/reference/tickers/${stockName.toUpperCase()}?apiKey=cS96spZmiDdDp_JCgz_hftVHFURRFsGs`;

    return this.http.get<SingleStockApiResponse>(polygonUrl).pipe(
      map((response) => {
        const singleStockResponse = response.results;

        // Map the singleStockResponse to an array of StockItem objects
        const stockItem: StockItem = {
          active: singleStockResponse.active,
          cik: singleStockResponse.cik,
          market: singleStockResponse.market,
          name: singleStockResponse.name,
          primary_exchange: singleStockResponse.primary_exchange,
          ticker: singleStockResponse.ticker,
          currency_name: singleStockResponse.currency_name,
          last_updated_utc: 'xyz',
          type: singleStockResponse.type,
          share_class_figi: singleStockResponse.share_class_figi,
          locale: singleStockResponse.locale,
          composite_figi: singleStockResponse.composite_figi,
        };
        return [stockItem];
      })
    );
  }
}
export interface AddStock {}
