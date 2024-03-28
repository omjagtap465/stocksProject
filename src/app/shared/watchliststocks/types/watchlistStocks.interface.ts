export interface WatchlistStock {
  id: number;
  ticker: string;
  name: string;
  market: string;
  primary_exchange: string;
  active: boolean;
  cik: number;
  is_deleted: boolean;
  watchlist_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface WatchlistStockResponse {
  statusCode: number;
  data: WatchlistStock[];
  message: string;
  success: boolean;
}
