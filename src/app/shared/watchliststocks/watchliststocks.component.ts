import {
  Component,
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
      console.log('Current watchlistNumber:', currentValue);
      console.log('Previous watchlistNumber:', previousValue);
    }
    this.getStocksData();
  }

  getStocksData() {
    this.store.dispatch(
      watchlistStocksActions.getStocks({ id: this.watchlistNumber })
    );
  }
}
