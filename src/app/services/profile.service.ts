import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { myProfile } from './mockes/mock-profile';
import { Profile } from './profile';
import { HttpClient } from '@angular/common/http';

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
  profileUrl = '/profiles/1';

  constructor(
    private http: HttpClient,
  ) {}

  static getProfile(id: number): Observable<Profile> {
    return of(myProfile);
  }

  public putProfile(profile: Profile): Observable<Profile> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Profile>(this.profileUrl, profile, httpOptions)
  }
}
