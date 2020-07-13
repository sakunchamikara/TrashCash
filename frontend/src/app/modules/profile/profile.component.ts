import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/pojo/user';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    private router: Router,
    private httpClient: HttpClient
  ) {}

  email: any;
  successMsg: any;
  errorMsg: any;
  public selectedFile: any = File;
  imgURL: any ;
  imageUploadFlag = null;

  ngOnInit() {
    this.email = this.authService.getAuthenticatedUser();
    this.user = new User(
      null,
      '',
      '',
      new Date(),
      '',
      '',
      '',
      '',
      null,
      '',
      ''
    );
    this.authService.getUser(this.email).subscribe((data) => {
      this.user = data;
      this.user.propic = 'data:image/jpeg;base64,' + data.image;
    });
  }

  onSelectFile(event) {
    const file = event.target.files[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  updateUserProfile() {
    console.log(this.imgURL);
    const uploadData = new FormData();
    if (this.imageUploadFlag) {
      uploadData.append('imageFile', this.selectedFile);
      this.httpClient
        .post('http://localhost:8080/profilePicture', uploadData, {
          observe: 'response',
        })
        .subscribe(
          (response) => {},
          (error) => {}
        );
    }
    this.authService.updateUserProfile(this.user).subscribe(
      (data) => {
        this.user = data;
        this.successMsg = `${this.user.email} was updated successfully !`;
        alert(this.successMsg);
        location.reload();
      },
      (error) => {
        this.errorMsg = 'Something went Wrong !!!';
      }
    );
  }
}
