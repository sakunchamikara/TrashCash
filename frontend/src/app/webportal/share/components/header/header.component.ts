import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice: CustomerAuthService) { }
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  isCustomerLoggedIn: any;

  ngOnInit() {
  }

  toggleSideBar() {
     this.isCustomerLoggedIn = this.authservice.isCustomerLoggedIn();
    if (this.isCustomerLoggedIn) {
      console.log("gona")
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
  }

}
