import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Profile } from '../services/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

// class ProfileErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
//   }
// }

export class ProfileComponent implements OnInit {

  constructor() {}

  profile: Profile;
  id = 1;
  password_hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  formControls: { [key: string]: FormControl; } = {};

  ngOnInit() {
    console.log("init");
    this.initFormControl();
    this.getProfile();
  }

  initFormControl() {
    this.formControls['login_id'] = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
    this.formControls['password'] = new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
  }

  getProfile(): void{
    ProfileService.getProfile(this.id).subscribe(profile => (this.profile = profile));
    console.log("getProfile");
    console.log(this.profile);
  }

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }

  onSubmit(){
    console.log("submit");
    console.log(this.profile);
    ProfileService.putProfile(this.profile).subscribe(profile => (this.profile = profile));
  }
}
