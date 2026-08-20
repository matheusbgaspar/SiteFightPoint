import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CONTACT } from '../../core/data/contact';
import { NAV_ITEMS } from '../../core/data/navigation';

@Component({
  selector: 'app-footer',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly contact = CONTACT;
  readonly navItems = NAV_ITEMS;
  readonly year = new Date().getFullYear();
}
