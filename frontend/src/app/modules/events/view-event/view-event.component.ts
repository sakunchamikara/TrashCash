import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/pojo/event';
import { Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {

  events :Observable<Event[]>;
  constructor(private eventService:EventService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.events = this.eventService.getEventList();
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEvent(id: number){
    this.router.navigate(['system','updateEvents',id]);
  }


}
