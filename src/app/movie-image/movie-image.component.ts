import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-movie-image',
  templateUrl: './movie-image.component.html',
  styleUrls: ['./movie-image.component.css']
})
export class MovieImageComponent implements OnInit {
  @Input() imagePath: string;
  @Input() altText: string;

  constructor() { }

  ngOnInit() {
  }

}
