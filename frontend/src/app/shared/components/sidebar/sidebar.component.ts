import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthserviceService) {}

  email: any;

  ngOnInit() {
    this.email = this.authService.getAuthenticatedUser();
  }
}
