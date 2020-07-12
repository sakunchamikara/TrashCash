import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/pojo/event';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {

  id : number;
  event : Event;

  constructor(private route: ActivatedRoute,private router: Router,private eventService:EventService) { }

  ngOnInit() {
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];

    this.eventService.getEvent(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.event = data;
    }, error => console.log(error));
  }

  updateEvent() {
    this.eventService.updateEvent(this.id, this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }

  onSubmit() {
    this.updateEvent();    
  }
  gotoList(){
    this.router.navigate(['system/viewEvent']);
  }


}
