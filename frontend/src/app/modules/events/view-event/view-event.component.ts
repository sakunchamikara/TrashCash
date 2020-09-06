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

  events : Array<Event>;
  eventReceived: Array<Event>;
  eventEmptyListFlag = false;
  constructor(private eventService:EventService,private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }


    getEvents() {
      this.eventService.getEventList().subscribe(
        (data) => {
          this.events = data;
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


  handleSuccessfulResponse(response) {
    this.events = new Array<Event>();
    //get books returned by the api call
    this.eventReceived = response;
    for (const event of this.eventReceived) {

      const bookwithRetrievedImageField = new Event();
      bookwithRetrievedImageField.id = event.id;
      bookwithRetrievedImageField.eventName = event.eventName;
      //bookwithRetrievedImageField.category = product.category;
      //populate retrieved image field so that product image can be displayed
      bookwithRetrievedImageField.location = event.location;
      bookwithRetrievedImageField.date = event.date;
      bookwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + event.image;
      bookwithRetrievedImageField.image= event.image;
      // bookwithRetrievedImageField.image2=product.image2;
      bookwithRetrievedImageField.notes = event.notes;
      this.events.push(bookwithRetrievedImageField);
    }
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.getEvents();
        },
        error => console.log(error));
  }

  updateEvent(id: number){
    this.router.navigate(['system','updateEvents',id]);
  }

  public openConfirmationDialog(id: number) {
    this.eventService
      .confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => {
        // console.log('User confirmed:', confirmed);
        if (confirmed == true) {
          this.deleteEvent(id);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }


}
