import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/service/orders.service';
import { Orders } from 'src/app/webportal/pojo/orders';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss'],
})
export class PendingOrdersComponent implements OnInit {

  type: string;
  ordersList: Array<Orders>;
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getPendingOrders();
  }

  getPendingOrders() {
    this.type = 'Pending';
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
