import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-movie-message',
  templateUrl: './movie-message.component.html',
  styleUrls: ['./movie-message.component.css']
})
export class MovieMessageComponent implements OnInit {
  @Input() introductionText: string;

  constructor() { }

  ngOnInit() {
  }

}
