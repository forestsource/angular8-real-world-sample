import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, timer } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService {
  url = environment.apiUrl + '/notifications';
  GET_INTERVAL = 3000;

  notificationPoller$: Observable<any>;
  load$ = new BehaviorSubject('');

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  periodicallyCheck(): void {
    this.notificationPoller$ = this.load$.pipe(
      switchMap(_ => timer(0, this.GET_INTERVAL).pipe(
        concatMap(_ => this.getNotification()),
        map((response: Notification) => response)
      ))
    );
  }

  errorHandler(error: any, source: Observable<any>) {
    return of(error);
  }

  public getNotification(): Observable<Notification> {
    return this.http.get<Notification>(this.url)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
