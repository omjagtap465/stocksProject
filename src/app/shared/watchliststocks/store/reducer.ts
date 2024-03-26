import { createFeature, createReducer, on } from '@ngrx/store';
import {
  RouterNavigatedAction,
  routerNavigationAction,
} from '@ngrx/router-store';
import { WatchlistStockStateInterface } from '../types/watchlistStockState.interface';
import { watchlistStocksActions } from './action';
const initialState: WatchlistStockStateInterface = {
  stocks: null,
};
const watchlistStockFeature = createFeature({
  name: 'watchliststock',
  reducer: createReducer(
    initialState,
    on(watchlistStocksActions.getStocks, (state) => ({
      ...state,
    })),
    on(watchlistStocksActions.getStocksSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      stocks: action.stocks,
    })),
    on(watchlistStocksActions.getStocksFailure, (state, action) => ({
      ...state,
    })),
    on(watchlistStocksActions.addStock, (state) => ({
      ...state,
    })),
    // on(watchlistStocksActions.addStockSuccess, (state, action) => {
    //   const stocks = state.stocks;
    //   return {
    //     ...state,
    //     isSubmitting: false,
    //     stocks: [...stocks, action.stock],
    //   };
    // }),
    on(watchlistStocksActions.addStockFailure, (state, action) => ({
      ...state,
    }))
  ),
});
export const {
  name: watchlistStockFeatureKey,
  reducer: watchlistStockReducer,
  selectStocks,
} = watchlistStockFeature;
