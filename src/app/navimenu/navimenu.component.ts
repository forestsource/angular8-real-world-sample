import { Component, OnInit } from '@angular/core';
import { Profile } from '../services/profile';
import { Subscription } from 'rxjs';

import { ProfileService } from '../services/profile.service';
import { UserSharedService } from '../services/user-shared.service';

@Component({
  selector: 'app-navimenu',
  templateUrl: './navimenu.component.html',
  styleUrls: ['./navimenu.component.css']
})
export class NavimenuComponent implements OnInit {
  public profile = new Profile;
  private subscription: Subscription;
  private id = 1;

  constructor(
    private userSharedService: UserSharedService,
    private profileService: ProfileService
    ) { }

  ngOnInit() {
    this.subscibeProfile();
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile(this.id).subscribe(profile => {
      this.profile = profile;
      this.userSharedService.onNotifySharedDataChanged(profile);
    })
  }

  isAdmin() {
    return true;
  }

  subscibeProfile() {
    this.subscription = this.userSharedService.sharedDataSource$.subscribe(
      profile => {
        console.info('[Navimenu] update profile update');
        this.profile = profile;
      }
    )
  }

  ngOnDestroy(): void {
    // MUST: Prevention Memory Leak
    this.subscription.unsubscribe();
  }

}
