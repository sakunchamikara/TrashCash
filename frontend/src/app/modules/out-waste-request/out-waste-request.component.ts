import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { OutWasteRequest } from 'src/app/webportal/pojo/out-waste-request';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { OutsourceWasteRequsetService } from 'src/app/webportal/services/outsource-waste-requset.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-out-waste-request',
  templateUrl: './out-waste-request.component.html',
  styleUrls: ['./out-waste-request.component.scss']
})
export class OutWasteRequestComponent implements OnInit {

  requestEmptyListFlag = false;
  retrieveRequests : Observable<OutWasteRequest[]>
  new : Array<CollectedWaste>
  action: string;
  selectedBook: OutWasteRequest;
  retrieveRequest: Array<OutWasteRequest>;

  constructor(private outsourceWasteRequsetService:OutsourceWasteRequsetService,private activedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    


    this.outsourceWasteRequsetService.getCustomerWasteRequestList().subscribe(
      (data) => {
        this.retrieveRequests = data;
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log("test"+this.retrieveRequests);
        } else {
          this.requestEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );

    this.activedRoute.queryParams.subscribe(
      (params) => {
        // get the url parameter named action. this can either be add or view.
        this.action = params['action'];
        const id = params['id'];
	// if id exists, convert it to integer and then retrive the book from
	// the books array
        if (id) {
          this.selectedBook = this.retrieveRequest.find(book => {
            return book.id === +id;
          });
        }
   }
    );
  }
  viewBook(id:number) {
    this.router.navigate(['system', 'ViewDB'], { queryParams: { id, action: 'view' } });
  }

}
