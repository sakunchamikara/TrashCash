import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/pojo/user';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  Roles: any = ['staff', 'agent'];
  Gender: any = ['male', 'female'];
  hide = true;
  msg = '';
  user = new User(0, '', '', new Date(), '', '', '', '', null, '');
  errorMessage:string;
  constructor(private authService: AuthserviceService, private route: Router) {}

  ngOnInit() {}

  registerUser() {
    this.authService.registerUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        this.route.navigate(['/system/login']);
      },
      (error) => {
        this.msg = error.error.message;
        this.errorMessage = this.msg;
      }
    );
  }
}
