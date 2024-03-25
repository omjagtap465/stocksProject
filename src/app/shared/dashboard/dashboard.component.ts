import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../auth/store/reducer';
import { Store } from '@ngrx/store';
import { PolygonService } from '../service/polygon.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { StockItem } from '../types/stockItem.interface';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'st-dashboard',
  standalone: true,
  imports: [NgIf, CommonModule, IconFieldModule, InputIconModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store, private stocksService: PolygonService) {}
  resp$: Observable<StockItem[]> | null = null;
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });
  ngOnInit(): void {}
  onSearch() {
    if (this.resp$ as Observable<StockItem[]>) return;
    this.resp$ = this.stocksService.getStocks();
    this.resp$.subscribe((data) => console.log(data));
  }
  addStock() {}
}
