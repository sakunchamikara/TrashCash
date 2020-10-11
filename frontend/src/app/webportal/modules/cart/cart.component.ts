import { Component, OnInit } from '@angular/core';
import { CustomerCartService } from '../../services/customer-cart.service';
import { Cart } from '../../pojo/cart';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  total: number;
  quentity: number;
  cartId: number;
  cartidString: string;
  itemCount: number;
  constructor(
    private customerCartService: CustomerCartService,
    private customerAuthService: CustomerAuthService,
    private router: Router,
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
          console.log(data)
          this.setTotal();
          this.itemCount = data.length;
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
    } else {
      this.router.navigate(['/customer/login']);
    }
  }

  setTotal() {
    let sum = 0;
    for (const cart of this.cartDetails) {
      sum = sum + +cart.quentity * cart.product.price;
    }
    this.total = sum;
  }

  number(x: number) {
    this.quentity = x;
    return this.quentity;
  }

  updateCart(form: NgForm) {
    // console.log(form.value);

    for (const key in form.value) {
      // console.log(key);
      // console.log(form.value[key]);
      if (form.value[key] === true) {
        this.customerCartService.deleteFromCart(+key).subscribe(
          (data) => {
            this.ngOnInit();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
    location.reload();
  }

  checkOut() {
    this.router.navigate(['/customer/checkOut']);
  }
}
