import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Film } from '../../core/models/film';

@Component({
  selector: 'app-film-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  @Input({ required: true }) film!: Film;

  constructor(private router: Router) {}

  goDetail() {
    this.router.navigate(['/films', this.film.id]);
  }
}
