import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Router } from '@angular/router';
//import { Item } from 'src/app/pojo/item';
import { Event } from 'src/app/pojo/event';
import { HttpClient } from '@angular/common/http';
declare var jQuery: any;


@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.scss"],
})
export class AddEventComponent implements OnInit {

  event = new Event();
  submitted = false;
  public arr: Array<string> = [];
  @Input()
  private selectedFile;
  imgURL: any;
  errorAlert:string;

  constructor(private eventService: EventService, private router: Router, private httpClient: HttpClient) { }
  successMsg: any;
  errorMsg: any;
  check: boolean;

  ngOnInit() {

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


  save() {
    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.httpClient.post('http://localhost:8080/uploadImage', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.eventService.createEvent(this.event).subscribe(
              (data) => {
                console.log(data);
                this.gotoList();
              }, error => this.errorAlert = error.error.message
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
        );
    } else {
      this.eventService.createEvent(this.event).subscribe(data => console.log(data), error => this.errorAlert = error.error.message);
      //this.event = new Event();
      //this.gotoList();
    }
  }

  checkName(cName: string) {
    this.eventService
      .getEventList()
      .subscribe(
        data => {
          console.log(data);
          this.check = false;
          this.arr = data;

          for (let i of this.arr) {
            if (i == cName) {
              console.log("found");
              console.log(i);
              this.check = true;
              this.cancelInsertDialog(i);
            }

          }

          if (this.check == false) {
            this.onSubmit();
            alert('New Event add SUCCESSFULLY!!');
            console.log("added");


          }



        }
      )

  }

  public cancelInsertDialog(eName: string) {
    this.eventService
      .alert('Event cannot be added', 'Event ' + eName + ' is already exists');

  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['system/viewEvent']);
  }
}
