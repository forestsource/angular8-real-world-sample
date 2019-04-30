import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { myProfile } from './mockes/mock-profile';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  static getProfile(id: number): Observable<Profile> {
    return of(myProfile);
  }

  static putProfile(profile: Profile): Observable<Profile> {
    //TODO: http put request
    return of(myProfile);
  }
}
