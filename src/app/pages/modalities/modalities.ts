import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MODALITIES } from '../../core/data/modalities';
import { PhotoPlaceholder } from '../../shared/photo-placeholder/photo-placeholder';

@Component({
  selector: 'app-modalities',
  imports: [MatButtonModule, MatChipsModule, MatIconModule, RouterLink, PhotoPlaceholder],
  templateUrl: './modalities.html',
  styleUrl: './modalities.scss',
})
export class Modalities {
  readonly modalities = MODALITIES;
}
