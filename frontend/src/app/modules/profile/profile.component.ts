import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/pojo/user';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Roles: any = ['staff', 'agent'];
  Gender: any = ['male', 'female'];
  hide = true;
  msg = '';
  user: User;

  constructor(
    private authService: AuthserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  email: any;
  successMsg: any;
  errorMsg: any;
  public userFile: any = File;
  reactiveForm: any = FormGroup;

  ngOnInit() {
    this.email = this.authService.getAuthenticatedUser();
    this.user = new User(null, '', '', new Date(), '', '', '', '', null, '');
    this.authService.getUser(this.email).subscribe((data) => {
      this.user = data;
    });
  }

  onSelectFile(event) {
    const file = event.target.files[0];
    this.userFile = file;
  }

  updateUserProfile() {
    this.authService.updateUserProfile(this.user).subscribe(
      (data) => {
        this.user = data;
        this.successMsg = `${this.user.email} was updated successfully !`;
      },
      (error) => {
        this.errorMsg = 'Something went Wrong !!!';
      }
    );
  }

  updateUserProfileWithImage(submitForm: FormGroup) {
    const user = submitForm.value;
    const formdata = new FormData();
    formdata.append('user', JSON.stringify(user));
    formdata.append('file', this.userFile);
    this.authService.updateUserProfileWithImage(formdata).subscribe(
      (data) => {
        this.successMsg = `${this.user.email} was updated successfully !`;
      },
      (error) => {
        this.errorMsg = 'Something went Wrong !!!';
      }
    );
  }
}
