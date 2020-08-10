import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-account",
  templateUrl: "./customer-account.component.html",
  styleUrls: ["./customer-account.component.scss"],
})
export class CustomerAccountComponent implements OnInit {
  feedbackFlag = false;
  constructor(private router: Router) {}

  ngOnInit() {

  }

}
