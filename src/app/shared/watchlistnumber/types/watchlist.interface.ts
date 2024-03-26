export interface Watchlist {
  id: number;
  watchlist_name: string;
  user_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface WatchlistApiResponse {
  statusCode: number;
  data: Watchlist[];
  message: string;
  success: boolean;
}
