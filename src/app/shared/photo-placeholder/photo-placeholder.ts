import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * Componente de foto com placeholder.
 *
 * Enquanto a propriedade `src` estiver vazia, exibe um quadro pontilhado
 * com ícone e rótulo indicando onde a foto real deve entrar.
 * Quando a foto for enviada, basta passar `[src]="'/assets/...'"`.
 */
@Component({
  selector: 'app-photo',
  imports: [MatIconModule],
  templateUrl: './photo-placeholder.html',
  styleUrl: './photo-placeholder.scss',
})
export class PhotoPlaceholder {
  /** Caminho da imagem real (vazio = mostra placeholder). */
  readonly src = input<string>('');
  /** Descrição da foto / texto do placeholder. */
  readonly label = input('Foto');
  /** Ícone exibido no placeholder. */
  readonly icon = input('photo_camera');
  /** Se false, o placeholder fica sem moldura pontilhada (área "limpa" para foto). */
  readonly framed = input(true);
}
