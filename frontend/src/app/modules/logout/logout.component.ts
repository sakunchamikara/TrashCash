import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationservice: AuthserviceService
  ) { }

  ngOnInit() {
    this.authenticationservice.logout();
  }

}
