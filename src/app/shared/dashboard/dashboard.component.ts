import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../auth/store/reducer';
import { Store } from '@ngrx/store';
import { PolygonService } from '../service/polygon.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { StockItem } from '../types/stockItem.interface';
import { ButtonModule } from 'primeng/button';
import { WatchlistnumberComponent } from '../watchlistnumber/watchlistnumber.component';
import { WatchliststocksComponent } from '../watchliststocks/watchliststocks.component';
import { WatchlistStocksService } from '../watchliststocks/service/watchliststocks.service';
import { AddStock } from '../watchliststocks/types/addStock.interface';
import { WatchlistStock } from '../watchliststocks/types/watchlistStocks.interface';
import { watchlistStocksActions } from '../watchliststocks/store/action';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
@Component({
  selector: 'st-dashboard',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    WatchlistnumberComponent,
    WatchliststocksComponent,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  watchlistId: number = 1;
  text: string | undefined;
  watchlistNumber(id: number) {
    this.watchlistId = id;
    console.log(this.watchlistId);
  }
  firstName = input<string>();
  constructor(private store: Store, private stocksService: PolygonService) {}
  stock$: Observable<WatchlistStock> | null = null;
  resp$: Observable<StockItem[]> | null = null;
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });
  count = signal(0);
  ngOnInit(): void {}
  onSearch() {
    if (this.resp$ as Observable<StockItem[]>) return;
    this.resp$ = this.stocksService.getStocks();
    this.resp$.subscribe((data) => console.log(data));
  }
  onChange(UpdatedValue: string): void {
    this.text = UpdatedValue.trim();
    if (this.text) {
      console.log(this.text, 'aa');
      this.resp$ = this.stocksService.getSingleStock(UpdatedValue);
    } else {
      this.resp$ = this.stocksService.getStocks();
    }
  }
  addStock(stockData: StockItem) {
    const stock: AddStock = {
      active: stockData.active,
      cik: stockData.cik ? stockData.cik : '0001',
      market: stockData.market,
      name: stockData.name,
      primary_exchange: stockData.primary_exchange
        ? stockData.primary_exchange
        : 'NSE',
      ticker: stockData.ticker,
      watchlist_id: this.watchlistId,
    };
    this.store.dispatch(watchlistStocksActions.addStock({ stock }));
  }
}
