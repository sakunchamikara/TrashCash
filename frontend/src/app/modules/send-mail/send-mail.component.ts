import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/service/email.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent {

  email: string;
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.email = "prgshan@gmail.com";
    this.emailService.sendEmail(this.email).subscribe(
      data => { 
        console.log(data); 
      }, 
      error => { 
        console.log(error);
      }
    );
  }

}

