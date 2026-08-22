import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MODALITIES } from '../../core/data/modalities';
import { PhotoPlaceholder } from '../../shared/photo-placeholder/photo-placeholder';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink, PhotoPlaceholder],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly modalities = MODALITIES;

  readonly marqueeItems = ['Fight Point', 'Karatê', 'Muay Thai', 'Jiu-Jitsu', 'Boxe'];
}
