import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Watchlist } from '../../watchlistnumber/types/watchlist.interface';
export const watchlistStocksActions = createActionGroup({
  source: 'watchlistStocks',
  events: {
    GetStocks: emptyProps(),
    'GetStocks Success': props<{ data: Watchlist[] }>(),
    'GetStocks Failure': emptyProps(),
  },
});
