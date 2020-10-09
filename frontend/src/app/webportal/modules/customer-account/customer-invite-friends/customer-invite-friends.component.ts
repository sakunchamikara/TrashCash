import { Component, Input, OnInit } from '@angular/core';
// import { NgxSocialShareModule } from 'ngx-social-share';

@Component({
  selector: 'app-customer-invite-friends',
  templateUrl: './customer-invite-friends.component.html',
  styleUrls: ['./customer-invite-friends.component.scss']
})
export class CustomerInviteFriendsComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
