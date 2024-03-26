export interface AddStockWatchlist {
  ticker: string;
  name: string;
  market: string;
  primary_exchange: string;
  active: boolean;
  cik: number;
  is_deleted: boolean;
  sequence_no: string;
  watchlist_id: number;
}

export interface AddStockWatchlistStockResponse {
  statusCode: number;
  data: AddStockWatchlist;
  message: string;
  success: boolean;
}
