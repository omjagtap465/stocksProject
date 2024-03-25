import { StockItem } from './stockItem.interface';

export interface StockResponseInterface {
  count: number;
  next_url: string;
  request_id: string;
  results: StockItem[];
  status: string;
}
