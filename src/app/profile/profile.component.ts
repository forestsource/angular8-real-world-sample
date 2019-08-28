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

  id = 1;
  password_hide = true;
  emptyProfile = new Profile();

  profileForm: FormGroup;

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
    this.profileService.getProfile(this.id).subscribe(profile => (this.setValues(profile)));
    console.log('getProfile');
  }

  setValues(profile: Profile): void {
    this.profileForm.patchValue(profile);
  }

  onSubmit() {
    console.log('submit');
    if (this.profileForm.invalid) { return false }
    let profile = this.formToModel(this.profileForm);
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
