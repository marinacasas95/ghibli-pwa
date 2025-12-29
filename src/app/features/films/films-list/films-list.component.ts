import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { MatTableModule } from '@angular/material/table';

import { GhibliService } from '../../../core/services/ghibli.service';
import { Film } from '../../../core/models/film';
import { FilmCardComponent } from '../../../shared/film-card/film-card.component';
import { FilmGridComponent } from '../../../shared/film-grid/film-grid.component';

@Component({
  standalone: true,
  selector: 'app-films-list',
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FilmCardComponent,
    FilmGridComponent,
  ],
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.scss',
  animations: [
    trigger('listEnter', [
      transition(':enter', [
        query(
          '.anim-item',
          [
            style({ opacity: 0, transform: 'translateY(8px)' }),
            stagger(35, [
              animate(
                '250ms ease-out',
                style({ opacity: 1, transform: 'none' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];
  loading = true;
  viewMode: 'cards' | 'table' = 'cards';

  constructor(private ghibli: GhibliService) {}

  ngOnInit(): void {
    this.ghibli.getFilms().subscribe({
      next: (films) => {
        this.films = films;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
