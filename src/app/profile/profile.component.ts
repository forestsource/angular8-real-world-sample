import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Profile } from '../services/profile';
import { ProfileService } from '../services/profile.service';
import { UserSharedService } from '../services/user-shared.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  my = 0;
  spinner = true;
  password_hide = true;
  emptyProfile = new Profile();
  private subscription: Subscription;
  profileForm: FormGroup;

  constructor(
    private profileService: ProfileService,
    private userSharedService: UserSharedService
  ) { }

  ngOnInit() {
    console.log('init');
    this.initFormControl();
    this.setValues(this.emptyProfile);
    this.getProfile();
  }

  initFormControl() {
    this.profileForm = new FormGroup({
      loginId: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*'),
        Validators.maxLength(30),
        Validators.minLength(8)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      profile: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      language: new FormControl('', [
        Validators.required
      ])
    });
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.profileForm.controls[controlName].hasError(errorName);
  }

  getProfile(): void {
    this.showSpinner();
    this.profileService.getProfile(this.my)
      .pipe(
        finalize(() => this.hideSpinner())
      )
      .subscribe(profile => {
        this.setValues(profile);
        this.userSharedService.onNotifySharedDataChanged(profile);
        console.log('getProfile');
      });
  }

  showSpinner(): void {
    this.spinner = true;
  }

  hideSpinner(): void {
    this.spinner = false;
  }

  setValues(profile: Profile): void {
    this.profileForm.patchValue(profile);
  }

  onSubmit() {
    console.log('submit');
    this.showSpinner();
    if (this.profileForm.invalid) { return false }
    let profile = this.formToModel(this.profileForm);
    this.profileService.putProfile(profile)
      .pipe(
        finalize(() => this.hideSpinner())
      )
      .subscribe(profile => {
        this.setValues(profile);
        this.userSharedService.onNotifySharedDataChanged(profile);
        console.log('putProfile');
      });
  }

  private formToModel(form: FormGroup): Profile {
    return new Profile(
      null,
      form.get('loginId').value,
      form.get('password').value,
      form.get('profile').value,
      form.get('language').value
    );
  }
}
