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
  user = new User(null, '', '', new Date(), '', '', '', '', null, '');
  msg = '';

  constructor(private service: AuthserviceService, private route: Router) {}

  ngOnInit() {}

  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('success');
        this.route.navigate([`/system/dashboard/`]);
      },
      (error) => {
        console.log('unsuccess');
        this.msg = 'Invalid Credentials';
      }
    );
  }
}
