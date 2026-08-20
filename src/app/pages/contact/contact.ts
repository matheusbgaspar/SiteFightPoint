import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CONTACT } from '../../core/data/contact';

@Component({
  selector: 'app-contact',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly contact = CONTACT;
  readonly mapSrc: SafeResourceUrl;

  name = '';
  phone = '';
  message = '';
  sent = false;

  constructor(sanitizer: DomSanitizer) {
    this.mapSrc = sanitizer.bypassSecurityTrustResourceUrl(CONTACT.mapEmbedUrl);
  }

  /** Abre o WhatsApp com a mensagem preenchida (site estático, sem backend). */
  openWhatsApp() {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${this.name || '…'}${this.phone ? ` (${this.phone})` : ''}. ${this.message}`,
    );
    window.open(`${this.contact.whatsappUrl}?text=${text}`, '_blank');
    this.sent = true;
  }
}
