import { Component, OnInit } from "@angular/core";
import { CustomerCartService } from "../../services/customer-cart.service";
import { Cart } from "../../pojo/cart";
import { CustomerAuthService } from "../../services/customer-auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  cartDetails: Array<Cart>;
  errorMessage = "";
  cid: number;
  productIMG = "";
  total: number;
  quentity:number;
  constructor(
    private customerCartService: CustomerCartService,
    private customerAuthService: CustomerAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cid = +this.customerAuthService.getAuthenticatedCustomerId();
    this.getCartData();

  }

  getCartData() {
    if (this.cid != null) {
      this.customerCartService.getCartDetails(this.cid).subscribe(
        (data) => {
          this.cartDetails = data;
          this.setTotal();
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
    } else {
      this.router.navigate(["/customer/login"]);
    }
  }

  setTotal() {
    let sum = 0;
    for (let cart of this.cartDetails) {
      sum = sum + (+cart.quentity * cart.product.price)
    }
    this.total = sum;
  }

  number(x: number) {
    this.quentity = x;
    return this.quentity;
  }
}
