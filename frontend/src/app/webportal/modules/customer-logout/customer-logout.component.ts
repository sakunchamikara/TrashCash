import { Component, OnInit } from '@angular/core';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-logout',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.scss']
})
export class CustomerLogoutComponent implements OnInit {

  constructor(
    private customerAuthServce: CustomerAuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.customerAuthServce.logout();
    this.route.navigate(['/customer/login']).then(() => {
      window.location.reload();
    });
  }

}
