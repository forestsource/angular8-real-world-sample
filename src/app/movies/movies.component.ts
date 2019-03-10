import { Component, OnInit } from '@angular/core';

import { Movie } from '../services/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
      this.getMovies();
  }

  getMovies(): void{
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
}
