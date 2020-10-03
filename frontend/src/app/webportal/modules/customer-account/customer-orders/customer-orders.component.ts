import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerOrderService } from 'src/app/webportal/services/customer-order.service';
import { Order } from 'src/app/webportal/pojo/order';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
})
export class CustomerOrdersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private orderService: CustomerOrderService
  ) {}

  date = new Date();
  order: Order;

  orderId: string;

  ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get('order_id');

    if (this.orderId) {
      this.order.id = this.orderId;
      this.order.date = this.date;
      this.order.status = 'Pending';

      this.orderService.setOrderId(this.order).subscribe(
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
