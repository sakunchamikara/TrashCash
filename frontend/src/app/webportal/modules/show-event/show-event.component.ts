import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/pojo/event';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {
//events: Observable<Event[]>;
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
