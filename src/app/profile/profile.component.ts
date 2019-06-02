import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';

import { Profile } from '../services/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(
    private profileService: ProfileService
  ) {}

  profile: Profile;
  id = 1;
  password_hide = true;

  profileForm: FormGroup;

  ngOnInit() {
    console.log('init');
    this.initFormControl();
    this.getProfile();
  }

  initFormControl() {
    this.profileForm = new FormGroup({
      loginId: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*'),
        Validators.maxLength(30)
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
    ProfileService.getProfile(this.id).subscribe(profile => (this.setValues(profile)));
    console.log('getProfile');
  }

  setValues(profile: Profile): void {
    this.profileForm.patchValue(profile);
  }

  onSubmit() {
    console.log('submit');
    let profile = this.formToModel(this.profileForm);
    console.log(profile);
    this.profileService.putProfile(profile).subscribe(profile => (console.log('update')));
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
