import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  events: Observable<Event[]>;
  successMsg: any;
  errorMsg: any;
  
  constructor( private eventService: EventService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.events = this.eventService.getEventList();
  }


}
