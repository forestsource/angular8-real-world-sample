import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

import { BaseService } from './base.service';
import { MOVIES } from './mockes/mock-movies';
import { Movie } from './movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {
  moviesUrl = environment.apiUrl + '/movies';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  errorHandler(): void {

  }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number): Observable<Movie> {
    // return of(MOVIES.find(movie => movie.id === id));
    let url = this.moviesUrl + '/' + id
    // httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    return this.http.get<Movie>(url, httpOptions);
  }

  getMovieMock(id: number): Observable<Movie> {
    return of(MOVIES.find(movie => movie.id === id));
  }
}
