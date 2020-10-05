import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/pojo/event';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  productEmptyListFlag = false;
  EventId: number;
  eventImage: string;
  events = new Event;
  successMsg: any;
  errorMsg: any;
  
  constructor( private eventService: EventService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.EventId = this.route.snapshot.params['id'];
    this.getTermById(this.EventId);
  }

    getTermById(EventId) {
      this.eventService.getEvent(EventId).subscribe(
        (data) => {
          this.events = data;
          this.eventImage = 'data:image/jpeg;base64,' + data.image;
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(this.events);
  }


}
