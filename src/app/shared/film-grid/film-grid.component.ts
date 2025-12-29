import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Film } from '../../core/models/film';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  stagger,
} from '@angular/animations';

@Component({
  standalone: true,
  selector: 'app-film-grid',
  imports: [CommonModule, MatTableModule],
  templateUrl: './film-grid.component.html',
  styleUrl: './film-grid.component.scss',
  animations: [
    trigger('rowsEnter', [
      transition(':enter', [
        query(
          'tr.anim-row',
          [
            style({ opacity: 0, transform: 'translateY(6px)' }),
            stagger(25, [
              animate(
                '180ms ease-out',
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
export class FilmGridComponent {
  @Input({ required: true }) films!: Film[];

  displayedColumns: string[] = [
    'title',
    'director',
    'release_date',
    'running_time',
  ];

  constructor(private router: Router) {}

  goDetail(row: Film): void {
    this.router.navigate(['/films', row.id]);
  }
}
