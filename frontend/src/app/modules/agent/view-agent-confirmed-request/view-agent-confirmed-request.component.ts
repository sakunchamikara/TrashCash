import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WasteRequest } from 'src/app/webportal/pojo/waste-request';
import { CustomerWasteRequestService } from 'src/app/webportal/services/customer-waste-request.service';

@Component({
  selector: 'app-view-agent-confirmed-request',
  templateUrl: './view-agent-confirmed-request.component.html',
  styleUrls: ['./view-agent-confirmed-request.component.scss']
})
export class ViewAgentConfirmedRequestComponent implements OnInit {

  retrieveConfirmes : Observable<WasteRequest[]>
  requestEmptyListFlag = false;

  constructor(private customerWasteRequestService:CustomerWasteRequestService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){

    this.customerWasteRequestService.getConfirmedWasteRequestList().subscribe(
      (data) => {
        this.retrieveConfirmes = data;
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log('test' + this.retrieveConfirmes);
        } else {
          this.requestEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
