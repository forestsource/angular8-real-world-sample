import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from "../../environments/environment";

import { myProfile } from './mockes/mock-profile';
import { Profile } from './profile';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  path = 'profile'
  profileUrl = environment.apiUrl + '/profile';

  constructor(
    private http: HttpClient,
  ) { }

  public getProfile(id: number): Observable<Profile> {
    // return of(myProfile);
    return this.http.get<Profile>(this.profileUrl, httpOptions)
  }

  public putProfile(profile: Profile): Observable<Profile> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Profile>(this.profileUrl, profile, httpOptions)
  }
}
