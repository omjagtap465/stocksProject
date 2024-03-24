import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'st-navbar',
  standalone: true,
  imports: [NgClass, NgIf, DividerModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor() {}
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
