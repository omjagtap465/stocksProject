import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { WatchlistStock } from '../types/watchlistStocks.interface';
import { StockItem } from '../../types/stockItem.interface';
import { AddStockWatchlist } from '../types/addStock.interface';
export const watchlistStocksActions = createActionGroup({
  source: 'watchlistStocks',
  events: {
    GetStocks: props<{ id: number }>(),
    'GetStocks Success': props<{ stocks: WatchlistStock[] }>(),
    'GetStocks Failure': emptyProps(),
    AddStock: props<{ stock: StockItem }>(),
    'AddStock Success': props<{ stock: AddStockWatchlist }>(),
    'AddStock Failure': emptyProps(),
  },
});
