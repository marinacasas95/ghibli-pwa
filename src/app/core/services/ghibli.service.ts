import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class GhibliService {
  private base = 'https://ghibliapi.vercel.app';
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.base}/films`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.base}/films/${id}`);
  }
}
