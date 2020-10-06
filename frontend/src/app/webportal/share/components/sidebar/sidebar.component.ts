import { Component, OnInit } from '@angular/core';
import { CustomerAuthService } from "src/app/webportal/services/customer-auth.service";
import { Customer } from "src/app/webportal/pojo/customer";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: CustomerAuthService) { }
  email: any;
  currentUser = new Customer();
  userType: any;
  isCustomerLoggedIn: boolean;

  ngOnInit() {
    this.email = this.authService.getAuthenticatedCustomer();
    this.authService.getCustomer(this.email).subscribe(
      (data) => {
        this.currentUser = data;
        this.userType = this.currentUser.type;
      },
      (error) => {
        console.log("error in getting user");
      }
    );
    this.isCustomerLoggedIn = this.authService.isCustomerLoggedIn();
  }

}
