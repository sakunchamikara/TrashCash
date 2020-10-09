import { Component, OnInit,Input } from '@angular/core';
import { Observable, from } from 'rxjs';
import { OutWasteRequest } from 'src/app/webportal/pojo/out-waste-request';
import { CollectedWaste } from 'src/app/pojo/collectedWaste';
import { OutsourceWasteRequsetService } from 'src/app/webportal/services/outsource-waste-requset.service';
import {CollectedWasteServiceService } from 'src/app/service/collected-waste-service.service';
import {SummaryStockService} from 'src/app/service/summary-stock.service'
import { ActivatedRoute, Router } from '@angular/router';
import { SummaryStock } from 'src/app/pojo/summary-stock';

@Component({
  selector: 'app-confirm-waste-request',
  templateUrl: './confirm-waste-request.component.html',
  styleUrls: ['./confirm-waste-request.component.scss']
})
export class ConfirmWasteRequestComponent implements OnInit {

  requestEmptyListFlag = false;
  stock : SummaryStock;
  retrieveRequests : Observable<OutWasteRequest[]>
  requests : OutWasteRequest;
  summary;
  waste : CollectedWaste;
  id:any;
  val:any;
  value:any;
  value1:any;
  value2:any;
  devices:any
  resultArray:any
  

  wasteType:String;
  public arr: Array<string> ;

  constructor(private route: ActivatedRoute,private outsourceWasteRequsetService:OutsourceWasteRequsetService,private activedRoute: ActivatedRoute,
    private router: Router ,private collectedWasteServiceService :CollectedWasteServiceService,private summaryStockService:SummaryStockService) { }
    
    chk: boolean;
    
  ngOnInit() {
   
    this.reloadData();
    
  }

  reloadData(){
    


    this.outsourceWasteRequsetService.getCustomerWasteRequestListConfirmed().subscribe(
      (data) => {
        this.retrieveRequests = data;
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log("test"+this.retrieveRequests);
          
          //console.log(JSON.stringify(this.retrieveRequests))
          
          
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
