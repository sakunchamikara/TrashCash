import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Router } from '@angular/router';
//import { Item } from 'src/app/pojo/item';
import { Event } from 'src/app/pojo/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  event = new Event();
  submitted = false;

  constructor(private eventService:EventService,private router: Router) { }
  successMsg: any;
  errorMsg: any;
  ngOnInit() {
  }
//alckacbakckacbkacbkbac
  save() {
    this.eventService.createEvent(this.event)
      .subscribe((data)=>{
        console.log(data);
        this.event = new Event();
        this.successMsg = `event add successfully !`;
        this.gotoList();
        console.log("correct");
      },
         (error) => {
          console.log(error);
          this.errorMsg = 'Something went Wrong !!!';
        this.router.navigate(['system/viewEvent']);
    }
      );
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['system/viewEvent']);
  }
  
  

}
