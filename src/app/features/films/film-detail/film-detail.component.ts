import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GhibliService } from '../../../core/services/ghibli.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
/*import { FilmCardComponent } from '../../../shared/film-card/film-card.component';*/
/*import { FilmGridComponent } from '../../../shared/film-grid/film-grid.component';*/
import { Film } from '../../../core/models/film';

@Component({
  standalone: true,
  selector: 'app-film-detail',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    /* FilmCardComponent,*/
    /*FilmGridComponent,*/
  ],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.scss',
})
export class FilmDetailComponent implements OnInit {
  film?: Film;
  loading = true;

  constructor(private route: ActivatedRoute, private ghibli: GhibliService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.ghibli.getFilm(id).subscribe({
      next: (film) => {
        this.film = film;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
