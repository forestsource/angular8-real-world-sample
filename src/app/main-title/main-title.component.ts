import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent implements OnInit {
  @Input() title: string;
  @Input() iconName: string;

  constructor() { }

  ngOnInit() {
  }

}
