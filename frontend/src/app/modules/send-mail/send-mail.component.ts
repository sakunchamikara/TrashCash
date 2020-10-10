import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/service/email.service';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent {

  emailContent: string;
  marked = false;

  customer = false;
  agent = false;
  staff = false;
  company = false;

  constructor(private emailService: EmailService,
    private customerService: CustomerAuthService,
    private userService: AuthserviceService
  ) { }

  ngOnInit() {
    this.emailContent = `Dear All,


  
Thank You,
Regards.
TrashCash (PVT) Ltd.`;
  }

  public getRecievers() {
    if (this.customer) {
      this.customerService.getUserByType('customer').subscribe(
        data => {
          data.forEach(element => {
            this.emailService.setContent(this.emailContent).subscribe(
              (response) => {
              },
              (error) => {
                console.log(error);
              }
            );
            this.emailService.sendEmail(element.toString()).subscribe(
              data => {
                console.log(data);
              },
              error => {
                console.log(error);
              }
            );
          });
        },
        error => {
          console.log(error);
        }
      );
    }
    if (this.agent) {
      this.userService.getUserByType('agent').subscribe(
        data => {
          data.forEach(element => {
            this.emailService.setContent(this.emailContent).subscribe(
              (response) => {
              },
              (error) => {
                console.log(error);
              }
            );
            this.emailService.sendEmail(element.toString()).subscribe(
              data => {
                console.log(data);
              },
              error => {
                console.log(error);
              }
            );
          });
        },
        error => {
          console.log(error);
        }
      );
    }
    if (this.company) {
      this.customerService.getUserByType('company').subscribe(
        data => {
          data.forEach(element => {
            this.emailService.setContent(this.emailContent).subscribe(
              (response) => {
              },
              (error) => {
                console.log(error);
              }
            );
            this.emailService.sendEmail(element.toString()).subscribe(
              data => {
                console.log(data);
              },
              error => {
                console.log(error);
              }
            );
          });
        },
        error => {
          console.log(error);
        }
      );
    }
    if (this.staff) {
      this.userService.getUserByType('staff').subscribe(
        data => {
          data.forEach(element => {
            this.emailService.setContent(this.emailContent).subscribe(
              (response) => {
              },
              (error) => {
                console.log(error);
              }
            );
            this.emailService.sendEmail(element.toString()).subscribe(
              data => {
                console.log(data);
              },
              error => {
                console.log(error);
              }
            );
          });

        },
        error => {
          console.log(error);
        }
      );
    }
  }
}

