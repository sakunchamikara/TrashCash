import { Component, OnInit } from "@angular/core";
import { AuthserviceService } from "src/app/service/authservice.service";
import { User } from "src/app/pojo/user";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthserviceService) {}

  email: any;
  currentUser = new User();
  userType: any;
  ngOnInit() {
    this.email = this.authService.getAuthenticatedUser();
    this.authService.getUser(this.email).subscribe(
      (data) => {
        this.currentUser = data;
        this.userType = this.currentUser.userType;
      },
      (error) => {
        console.log("error in getting user");
      }
    );

  }
}
