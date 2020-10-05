import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerOrderService } from 'src/app/webportal/services/customer-order.service';
import { Orders } from 'src/app/webportal/pojo/orders';
import { CustomerCartService } from 'src/app/webportal/services/customer-cart.service';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { Cart } from 'src/app/webportal/pojo/cart';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
})
export class CustomerOrdersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private orderService: CustomerOrderService,
    private cartService: CustomerCartService,
    private customerAuth: CustomerAuthService
  ) {}

  carts: Array<Cart>;
  date = new Date();
  order = new Orders();
  cart = new Cart();
  customerId: number;

  orderId: string;

  ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get('order_id');
    this.customerId = +this.customerAuth.getAuthenticatedCustomerId();

    if (this.orderId) {
      this.order.id = +this.orderId;
      this.order.date = this.date;
      this.order.status = 'Pending';
      console.log(this.order);

      this.orderService.setOrder(this.order).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

      this.cartService.getCartDetails(this.customerId).subscribe(
        (data) => {
          this.carts = data;
          this.carts.forEach((element) => {
            element.customerId = this.customerId;
            element.orderId = this.orderId;
            element.status = 'paid';
          });
          this.updatecartorder();
          console.log(this.carts);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  updatecartorder() {
    this.cartService.updateCartOrder(this.carts).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
