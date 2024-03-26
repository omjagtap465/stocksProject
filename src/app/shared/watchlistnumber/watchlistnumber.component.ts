import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Watchlist } from './types/watchlist.interface';
import { WatchlistService } from './service/watchlistcountsservice.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'st-watchlistnumber',
  standalone: true,
  imports: [NgFor],
  templateUrl: './watchlistnumber.component.html',
  styleUrl: './watchlistnumber.component.css',
})
export class WatchlistnumberComponent implements OnInit {
  watchlistData: Watchlist[] = [];
  @Output() selectedWatchlistId: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.loadUserWatchlistData();
  }
  selectWatchlistId(watchlistId: number) {
    this.selectedWatchlistId.emit(watchlistId);
  }

  loadUserWatchlistData(): void {
    this.watchlistService.getUserWatchlistData().subscribe((data) => {
      this.watchlistData = data;
    });
  }
}
