import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent implements OnInit {
  @Input() componentName: string;
  @Input() iconName: string;
  mainTitle: string;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ja');
    translate.use('ja');
  }

  ngOnInit() {
    this.mainTitle = `${this.componentName}.title`;
  }

}
