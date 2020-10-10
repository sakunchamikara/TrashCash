import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';
import { Orders } from 'src/app/webportal/pojo/orders';

@Component({
  selector: 'app-accepted-orders',
  templateUrl: './accepted-orders.component.html',
  styleUrls: ['./accepted-orders.component.scss'],
})
export class AcceptedOrdersComponent implements OnInit {
  type: string;
  ordersList: Array<Orders>;

  constructor(
    private ordersService: OrdersService,
  ) {}

  ngOnInit() {
    this.getPendingOrders();
  }

  getPendingOrders() {
    this.type = 'Accepted';
    this.ordersService.getOrdersByType(this.type).subscribe(
      (data) => {
        this.ordersList = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
