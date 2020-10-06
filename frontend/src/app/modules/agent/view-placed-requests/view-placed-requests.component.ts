import { Component, OnInit } from '@angular/core';
import { getType } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Observable } from 'rxjs';
import { SummaryStock } from 'src/app/pojo/summary-stock';
import { SummaryStockService } from 'src/app/service/summary-stock.service';
import { WasteRequest } from 'src/app/webportal/pojo/waste-request';
import { CustomerWasteRequestService } from 'src/app/webportal/services/customer-waste-request.service';

@Component({
  selector: 'app-view-placed-requests',
  templateUrl: './view-placed-requests.component.html',
  styleUrls: ['./view-placed-requests.component.scss'],
})
export class ViewPlacedRequestsComponent implements OnInit {
  requestEmptyListFlag = false;
  retrieveRequests: Observable<WasteRequest[]>;

  requests: WasteRequest;
  summary;
  stock : SummaryStock;

  constructor(
    private customerWasteRequestService: CustomerWasteRequestService,private summaryStockService :SummaryStockService
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerWasteRequestService.getCustomerWasteRequestList().subscribe(
      (data) => {
        this.retrieveRequests = data;
        if (data.length > 0) {
          this.requestEmptyListFlag = false;
          console.log('test' + this.retrieveRequests);
        } else {
          this.requestEmptyListFlag = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  confirm(id: number) {
  var type;
  var sum;
    this.customerWasteRequestService.getCustomerWasteRequest(id).subscribe(
      (data) => {
        this.requests = data;
        this.requests.status = 'Confirmed';
       
        console.log(data);
        type = this.requests.wasteType;
        sum = this.requests.quantity;
        this.getType(type,sum);

        this.customerWasteRequestService
        .updateCustomerWasteRequest(id, this.requests)
        .subscribe(
          (data) => console.log(data),
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => console.log(error)
    );

    
   
   
    this.reloadData();
  }

  getType(type: string,sum: number){
    var i;
    var name;
    var count;
    console.log(type);
    console.log(sum);
    
    this.summaryStockService.getSummaryWaste().subscribe(
      (data)=>{
        this.summary = data;
        this.summary.forEach(element => {
       

          let val = data.find(xi => {
                          if (xi.type = type){
                            i = xi.id;
                            name = xi.type;
                            count = xi.total;
                            console.log("type = "+xi.type);
                            console.log("id = "+xi.id);
                            return xi.total;
                            
                          }
                          
                          
                            return 1;
                        });
                        this.stockType(i,sum,count);
                    return 1;
                    
        });
      }
    );
  }


stockType(id:number,sum:number,count:number){
  console.log("iddd"+id);
  this.summaryStockService.getSummaryWastebyId(id).subscribe(
    (data)=>{
      console.log(data);
      this.stock = data;
      this.stock.total = sum+count;
      console.log(this.stock.total);

      this.summaryStockService.updateSummaryStock(id,this.stock).subscribe(
                (data)=>console.log("summary"+data),(error)=>{
                  console.log(error);
                }
              );
    }
  );
}

}










