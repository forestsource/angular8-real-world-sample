import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { BaseService } from './base.service';

import { myProfile } from './mockes/mock-profile';
import { Profile } from './profile';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService {
  path = 'profile';
  profileUrl = environment.apiUrl + '/profile';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  errorHandler(error: any, source: Observable<any>) {
    console.info('error', error);
    //TODO: 詳細なエラーハンドリング
    return of(error);
  }

  public getProfile(id: number): Observable<Profile> {
    // return of(myProfile);
    return this.http.get<Profile>(this.profileUrl, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public putProfile(profile: Profile): Observable<Profile> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Profile>(this.profileUrl, profile, httpOptions);
  }
}
