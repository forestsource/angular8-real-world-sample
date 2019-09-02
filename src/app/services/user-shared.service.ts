import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  constructor() { }

  private shareDataSource = new Subject<Profile>();
  public sharedDataSource$ = this.shareDataSource.asObservable();
  public onNotifySharedDataChanged(updateed: Profile) {
    console.info('[User Shared Service] update profile', updateed);
    this.shareDataSource.next(updateed);
  }
}
