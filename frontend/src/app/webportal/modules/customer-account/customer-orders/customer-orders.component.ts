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

  date = new Date();
  order = new Orders();
  cart = new Cart();
  customerId: number;

  orderId: string;

  ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get('order_id');

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

      this.customerId = +this.customerAuth.getAuthenticatedCustomerId();
      this.cart.customerId = this.customerId;
      this.cart.orderId = this.orderId;
      this.cart.status = 'paid';
      this.cartService.updateCartOrder(this.cart).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
