import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authservice: AuthserviceService,
    private customerFeedbackService: CustomerFeedbackService
  ) {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  isUserLoggedIn: any;

  public feedbackStatus: Array<string> = [];
  public noNew: any;

  ngOnInit() {
    this.getNumberOfNotifications();
  }

  toggleSideBar() {
    this.isUserLoggedIn = this.authservice.isUserLoggedIn();
    if (this.isUserLoggedIn) {
      this.toggleSideBarForMe.emit();
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }
  }

  getNumberOfNotifications() {
    this.customerFeedbackService.getCountNewFeedback().subscribe((data) => {
      data.forEach((element) => {
        this.feedbackStatus.push(element[`status`]);
        this.noNew = this.feedbackStatus.length;
      });
    });
  }
}
