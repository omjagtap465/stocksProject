import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WatchlistStock } from './types/watchlistStocks.interface';
import { CommonModule, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectStocks } from './store/reducer';
import { watchlistStocksActions } from './store/action';
import { StockItem } from '../types/stockItem.interface';
import { WatchlistStocksService } from './service/watchliststocks.service';

@Component({
  selector: 'st-watchliststocks',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './watchliststocks.component.html',
  styleUrl: './watchliststocks.component.css',
})
export class WatchliststocksComponent implements OnInit, OnChanges {
  constructor(private store: Store) {}
  data$ = combineLatest({
    stocks: this.store.select(selectStocks),
  });
  @Input() watchlistNumber: number = 1;
  watchlistData: WatchlistStock[] = [];
  ngOnInit(): void {
    this.getStocksData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if ('watchlistNumber' in changes) {
      const currentValue = changes['watchlistNumber'].currentValue;
      const previousValue = changes['watchlistNumber'].previousValue;
    }
    this.getStocksData();
  }

  getStocksData() {
    this.store.dispatch(
      watchlistStocksActions.getStocks({ id: this.watchlistNumber })
    );
  }
  deleteStock(id: number) {
    console.log(id);

    // this.stockService.deleteStockFromWatchlist(id);
    this.store.dispatch(watchlistStocksActions.deleteStock({ id: id }));
  }
}
