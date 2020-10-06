import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent {

  title = 'EmailTemplate';

  dataset: Details = {
    email:'',
    description:''
  };

  constructor(private https: HttpClient) { }

  onSubmit() {
    this.https.post<Details>('http://localhost:8080/sendmail', this.dataset).subscribe(
      res => {
        this.dataset = res;
        console.log(this.dataset);
        alert('Email Sent successfully');
        this.dataset.email = '';
        this.dataset.description = '';

        
      });
  }

}

interface Details
{
  email:string;
  description:string;
}
