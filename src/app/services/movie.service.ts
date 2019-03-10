import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MOVIES } from './mockes/mock-movies';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor() {}

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    return of(MOVIES.find(movie => movie.id === id));
  }
}
