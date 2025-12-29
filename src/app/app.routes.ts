import { Routes } from '@angular/router';
import { FilmsListComponent } from './features/films/films-list/films-list.component';
import { FilmDetailComponent } from './features/films/film-detail/film-detail.component';

export const routes: Routes = [
  { path: '', component: FilmsListComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: '**', redirectTo: '' },
];
