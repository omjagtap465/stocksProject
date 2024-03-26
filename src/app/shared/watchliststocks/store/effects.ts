import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { Router } from '@angular/router';
import { WatchlistStocksService } from '../service/watchliststocks.service';
import { watchlistStocksActions } from './action';
import { WatchlistStock } from '../types/watchlistStocks.interface';
import { AddStockWatchlist } from '../types/addStock.interface';
export const getWatchlistStocksEffects = createEffect(
  (
    actions$ = inject(Actions),
    watchlistStocksService = inject(WatchlistStocksService)
  ) => {
    return actions$.pipe(
      ofType(watchlistStocksActions.getStocks),
      switchMap(({ id }) => {
        return watchlistStocksService.getUserWatchlistData(id).pipe(
          map((watchlistStocks: WatchlistStock[]) => {
            return watchlistStocksActions.getStocksSuccess({
              stocks: watchlistStocks,
            });
          }),
          catchError(() => {
            return of(watchlistStocksActions.getStocksFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
export const addStockToWatchlistEffects = createEffect(
  (
    actions$ = inject(Actions),
    watchlistStocksService = inject(WatchlistStocksService)
  ) => {
    return actions$.pipe(
      ofType(watchlistStocksActions.addStock),
      switchMap(({ stock }) => {
        return watchlistStocksService.addStockToWatchlist(stock).pipe(
          map((addStockWatchlist: AddStockWatchlist) => {
            return watchlistStocksActions.addStockSuccess({
              stock: addStockWatchlist,
            });
          }),
          catchError(() => {
            return of(watchlistStocksActions.addStockFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
