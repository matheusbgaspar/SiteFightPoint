import { Modality } from '../models';

/**
 * Modalidades da Fight Point.
 * Textos básicos/placeholder — serão refinados com as informações reais da academia.
 */
export const MODALITIES: Modality[] = [
  {
    id: 'karate',
    name: 'Karatê',
    icon: 'sports_martial_arts',
    tagline: 'Disciplina, tradição e defesa pessoal.',
    description:
      'Karatê tradicional, ministrado pelo Shihan Iuri Messias. Desenvolve disciplina, autocontrole e técnicas completas de defesa pessoal, para todas as idades.',
    benefits: ['Disciplina', 'Defesa pessoal', 'Condicionamento físico', 'Foco e respeito'],
  },
  {
    id: 'muay-thai',
    name: 'Muay Thai',
    icon: 'sports_kabaddi',
    tagline: 'A arte das oito armas.',
    description:
      'Treinamento intenso com golpes de punho, cotovelo, joelho e chute. Ideal para quem busca condicionamento físico e técnicas de luta em pé.',
    benefits: ['Queima de calorias', 'Condicionamento', 'Defesa pessoal', 'Confiança'],
  },
  {
    id: 'jiu-jitsu',
    name: 'Jiu-Jitsu',
    icon: 'sports_handball',
    tagline: 'Técnica, controle e finalizações.',
    description:
      'Arte marcial de solo que ensina a usar a técnica para superar a força, com foco em posicionamento, controle e finalizações.',
    benefits: ['Técnica', 'Controle', 'Resistência', 'Mentalidade estratégica'],
  },
  {
    id: 'boxe',
    name: 'Boxe',
    icon: 'sports_mma',
    tagline: 'O nobre esporte.',
    description:
      'Golpes, esquivas e muita movimentação. O Boxe melhora reflexos, coordenação e condicionamento cardiovascular.',
    benefits: ['Reflexos', 'Coordenação', 'Condicionamento', 'Força'],
  },
];
