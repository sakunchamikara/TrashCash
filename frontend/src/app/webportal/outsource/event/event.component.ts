import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/pojo/event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventList: Array<Event>;
eventEmptyListFlag = false;
activeFlag = '';
successMsg: any;
errorMsg: any;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEventList().subscribe(
      (data) => {
        this.eventList = data;
        if (data.length > 0) {
          this.eventEmptyListFlag = false;
        } else {
          this.eventEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
