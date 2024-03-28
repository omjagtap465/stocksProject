import { WatchlistStock } from './watchlistStocks.interface';

export interface AddStockWatchlist {
  ticker: string;
  name: string;
  market: string;
  primary_exchange: string;
  active: boolean;
  cik: number;
  is_deleted: boolean;
  watchlist_id: number;
}
export interface AddStock {
  ticker: string;
  name: string;
  market: string;
  primary_exchange: string;
  active: boolean;
  cik: string;
  watchlist_id: number;
}

export interface AddStockWatchlistStockResponse {
  statusCode: number;
  data: WatchlistStock;
  message: string;
  success: boolean;
}
