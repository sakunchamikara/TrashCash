import { Component, OnInit } from '@angular/core';

import { User } from "src/app/pojo/user";
import { AuthserviceService } from "src/app/service/authservice.service";
import { Router } from "@angular/router";


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  Roles: any = ["staff", "agent"];
  Gender: any = ["male", "female"];
  hide = true;
  msg = "";
  user = new User();

  constructor() {}

  ngOnInit() {}
}
