import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PhotoPlaceholder } from '../../shared/photo-placeholder/photo-placeholder';

@Component({
  selector: 'app-about',
  imports: [MatButtonModule, MatIconModule, RouterLink, PhotoPlaceholder],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly values = [
    {
      icon: 'handshake',
      title: 'Respeito',
      text: 'Valorizamos o respeito dentro e fora dos tatames, entre alunos, professores e modalidades.',
    },
    {
      icon: 'schedule',
      title: 'Disciplina',
      text: 'A disciplina é a base do treino e da evolução em qualquer arte marcial.',
    },
    {
      icon: 'groups',
      title: 'Comunidade',
      text: 'A Fight Point é uma família. Aqui todos se apoiam para evoluir juntos.',
    },
    {
      icon: 'trending_up',
      title: 'Evolução',
      text: 'Do iniciante ao competidor: cada um tem seu ritmo e seu objetivo.',
    },
  ];
}
