import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private authenticationservice: AuthserviceService,
    private route: Router
  ) {}

  ngOnInit() {
    this.authenticationservice.logout();
    this.route.navigate([`/system/login/`]).then(() => {
      window.location.reload();
    });
  }
}
