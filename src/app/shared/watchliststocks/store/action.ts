import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { WatchlistStock } from '../types/watchlistStocks.interface';
import { StockItem } from '../../types/stockItem.interface';
import { AddStock, AddStockWatchlist } from '../types/addStock.interface';
export const watchlistStocksActions = createActionGroup({
  source: 'watchlistStocks',
  events: {
    GetStocks: props<{ id: number }>(),
    'GetStocks Success': props<{ stocks: WatchlistStock[] }>(),
    'GetStocks Failure': emptyProps(),
    AddStock: props<{ stock: AddStock }>(),
    'AddStock Success': props<{ stock: WatchlistStock }>(),
    'AddStock Failure': emptyProps(),
    DeleteStock: props<{ id: number }>(),
    'DeleteStock Success': props<{ id: number }>(),
    'DeleteStock Failure': emptyProps(),
  },
});
