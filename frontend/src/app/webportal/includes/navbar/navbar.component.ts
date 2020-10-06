import { Component, OnInit } from '@angular/core';
import { ProductcatService } from 'src/app/service/productcat.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/pojo/item';
import { CustomerCartService } from '../../services/customer-cart.service';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Customer } from '../../pojo/customer';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  products: Array<Item>;

  constructor(
    private service: ProductcatService,
    private router: Router,
    private cartService: CustomerCartService,
    private customerService: CustomerAuthService
  ) {}

  public listItems: Array<string> = [];
  itemCount: number;
  cid: number;
  mySubscription: any;
  currentCustomer: Customer;
  customerEmail: string;
  customerType: string;
  customerName: string;
  isCustomerLoggedIn: boolean;

  ngOnInit() {
    this.dropdownRefresh();
    this.isCustomerLoggedIn = this.customerService.isCustomerLoggedIn();
    this.cid = +this.customerService.getAuthenticatedCustomerId();
    this.getItemCount();
    if (this.customerService.isCustomerLoggedIn()) {
      this.customerEmail = this.customerService.getAuthenticatedCustomer();
      this.customerService.getCustomer(this.customerEmail).subscribe(
        (data) => {
          this.currentCustomer = data;
          this.customerType = this.currentCustomer.type;
          this.customerName = this.currentCustomer.firstName;
        },
        (error) => {
          console.log("error in getcustomer function");
        }
      );
    }
  }

  dropdownRefresh() {
    this.service.getProductCatDropdownValues().subscribe((data) => {
      data.forEach((element) => {
        this.listItems.push(element["name"]);
      });
    });
  }

  ViewCategory(category: string) {
    this.router.navigate(["customer", "shop", category]);
  }

  getItemCount() {
    this.cartService.getCartDetails(this.cid).subscribe(
      (data) => {
        this.itemCount = data.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

export class MenuOverviewExample {}
