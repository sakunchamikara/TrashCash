import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { User } from 'src/app/pojo/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private service: AuthserviceService, private route: Router) {}

  ngOnInit() {}

  loginUser() {
    this.user.password = btoa(this.user.password);
    this.service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        this.route
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.route.navigate(['/system/dashboard/']));
      },
      (error) => {
        this.msg = 'Invalid Credentials';
      }
    );
  }
}
