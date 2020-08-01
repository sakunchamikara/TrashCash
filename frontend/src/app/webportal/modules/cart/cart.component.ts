import { Component, OnInit } from '@angular/core';
import { CustomerCartService } from '../../services/customer-cart.service';
import { Cart } from '../../pojo/cart';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartDetails: Array<Cart>;
  errorMessage = '';
  cid: number;
  productIMG = '';
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
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
    } else {
      this.router.navigate(['/customer/login']);
    }
  }
}
