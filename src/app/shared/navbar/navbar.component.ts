import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../auth/store/reducer';
@Component({
  selector: 'st-navbar',
  standalone: true,
  imports: [NgClass, NgIf, DividerModule, RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private store: Store) {}
  isMenuOpen: boolean = false;
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  });
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
