import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NAV_ITEMS } from './core/data/navigation';
import { Footer } from './shell/footer/footer';
import { Header } from './shell/header/header';

@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Header,
    Footer,
  ],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  readonly navItems = NAV_ITEMS;
}
