import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/pojo/event';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent implements OnInit {
  private selectedFile;
  id : number;
  event : Event;
  imgURL: any;

  constructor(private route: ActivatedRoute,private router: Router,private eventService:EventService, private httpClient: HttpClient ) { }

  ngOnInit() {
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];

    this.eventService.getEvent(this.id)
    .subscribe(data => {
      console.log(data)
      
      this.event = data;
    }, error => console.log(error));
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  updateEvent() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8080/uploadImage', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.eventService.updateEvent(this.id, this.event).subscribe(data => console.log(data), error => console.log(error));
          this.gotoList();
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
  }

  // updateEvent() {
  //   this.eventService.updateEvent(this.id, this.event)

  //     .subscribe(data => console.log(data), error => console.log(error));
  //   // this.event = new Event();
  //   this.gotoList();
  // }

  onSubmit() {
    this.updateEvent();    
  }
  gotoList(){
    this.router.navigate(['system/viewEvent']);
  }


}
