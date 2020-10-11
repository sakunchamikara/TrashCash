import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { CustomerFeedbackService } from 'src/app/webportal/services/customer-feedback.service';
import { OutsourceWasteRequsetService } from 'src/app/webportal/services/outsource-waste-requset.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public authservice: AuthserviceService,
    private customerFeedbackService: CustomerFeedbackService,
    private outsourcewasterequsetservice:OutsourceWasteRequsetService
  ) {}

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  isUserLoggedIn: any;

  public feedbackStatus: Array<string> = [];
  public outWasteStatus: Array<string> = [];
  public noNew1: number;
  public noNew2: number;
  public totalNot: number = 0;

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
        console.log(data.length);
        //this.noNew1 = this.feedbackStatus.length;
        this.noNew1 = data.length;
        console.log(this.noNew1);
      });
    });

   // console.log(this.noNew1);
    this.outsourcewasterequsetservice.getCountPendingWasteRequests().subscribe((data) => {
      data.forEach((element) => {
        this.outWasteStatus.push(element[`status`]);
        console.log(data.length);
        //this.noNew2 = this.outWasteStatus.length;
        this.noNew2 = data.length;
      });
    });


  }
}
