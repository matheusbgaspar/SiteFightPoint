import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Fight Point – Academia de Artes Marciais',
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'Sobre – Fight Point',
  },
  {
    path: 'modalidades',
    loadComponent: () => import('./pages/modalities/modalities').then((m) => m.Modalities),
    title: 'Modalidades – Fight Point',
  },
  {
    path: 'horarios',
    loadComponent: () => import('./pages/schedule/schedule').then((m) => m.Schedule),
    title: 'Horários – Fight Point',
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contato – Fight Point',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
