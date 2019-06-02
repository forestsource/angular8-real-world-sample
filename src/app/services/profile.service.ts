import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { myProfile } from './mockes/mock-profile';
import { Profile } from './profile';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileUrl = '/profile';
  handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('ProfileService');
  }

  static getProfile(id: number): Observable<Profile> {
    return of(myProfile);
  }

  public putProfile(profile: Profile): Observable<Profile> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Profile>(this.profileUrl, profile, httpOptions)
      .pipe(
        catchError(this.handleError('updateProfile', profile))
      );
  }
}
