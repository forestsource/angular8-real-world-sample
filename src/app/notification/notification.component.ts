import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../services/notification';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ja');
    translate.use('ja');
  }

  ngOnInit() {
    console.info(this.notification.msg);
  }

}
