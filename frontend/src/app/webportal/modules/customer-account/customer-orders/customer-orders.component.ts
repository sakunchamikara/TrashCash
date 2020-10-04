import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerOrderService } from 'src/app/webportal/services/customer-order.service';
import { Orders } from 'src/app/webportal/pojo/orders';

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
  order = new Orders();

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
    }
  }
}
