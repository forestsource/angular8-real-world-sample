import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../services/movie';
import { MovieService } from '../services/movie.service';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() id: Number;

  movie: Movie;
  imagePath: String; 

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.movie = new Movie(); // Empty Movie
    this.getMovie();
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
        this.imagePath = environment.apiUrl + '/' + this.movie.thumbnail;
    });
    console.info(this.movie)
  }
}
