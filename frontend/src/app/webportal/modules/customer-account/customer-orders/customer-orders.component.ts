import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-customer-orders",
  templateUrl: "./customer-orders.component.html",
  styleUrls: ["./customer-orders.component.scss"],
})
export class CustomerOrdersComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  date = new Date();
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  
  orderId: string;

  ngOnInit() {
    this.orderId = this.route.snapshot.queryParamMap.get("order_id");

    this.year = this.date.getFullYear().toString();
    this.month = (this.date.getMonth() + 1).toString();
    this.day = this.date.getDate().toString();
    this.hour = this.date.getHours().toString();
    this.minute = this.date.getMinutes().toString();
    this.second = this.date.getSeconds().toString();
    if (this.orderId == null) {
    } else {
    }
  }
}
