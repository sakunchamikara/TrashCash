import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/webportal/pojo/customer';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'app-outprofile',
  templateUrl: './outprofile.component.html',
  styleUrls: ['./outprofile.component.scss']
})
export class OutprofileComponent implements OnInit {
  Roles: any = ['customer', 'company'];
  hide = true;
  msg = '';
  user:Customer ;
  profilepictureFlag = false;

  constructor(private authService: CustomerAuthService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  email: any;
  successMsg: any;
  errorMsg: any;

  ngOnInit() {
    this.email = this.authService.getAuthenticatedCustomer();
    this.user = new Customer();
    this.authService.getCustomer(this.email).subscribe((data) => {
      this.user = data;
    });
  }

  updateUserProfile() {
  
    this.user.password = btoa(this.user.password);
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
