import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/webportal/pojo/customer';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.scss']
})
export class UpdateCustomerProfileComponent implements OnInit {

  Roles: any = ['customer', 'company'];
  hide = true;
  msg = '';
  user:Customer;
  profilepictureFlag = false;
  id: number;

  constructor(private authService: CustomerAuthService,private route: ActivatedRoute,private router: Router,private httpClient: HttpClient) { }

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
  
    this.authService.getCustomer(this.email).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.id = this.user.id;

      this.authService.updateCustomerProfile(this.id,this.user).subscribe(
        (data)=>{
          console.log(data);
        }
      );
    });
    // this.user.password = btoa(this.user.password);
    
    this.authService.updateCustomerProfile(this.id,this.user).subscribe(
      (data) => {
        // this.user = data;
        this.successMsg = `${this.user.email} was updated successfully !`;
        alert(this.successMsg);
        location.reload();
      },
      (error) => {
        this.errorMsg = 'Something went Wrong !!!';
        console.log(error);
      }
    );
  }


  

}
