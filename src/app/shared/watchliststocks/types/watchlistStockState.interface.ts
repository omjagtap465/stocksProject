import { WatchlistStock } from './watchlistStocks.interface';

export interface WatchlistStockStateInterface {
  stocks: WatchlistStock[] | null | undefined;
}
