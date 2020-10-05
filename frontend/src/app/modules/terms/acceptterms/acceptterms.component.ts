import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/webportal/pojo/customer';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { Router } from '@angular/router';
import { error, log } from 'console';
//import { CustomerTermService } from 'src/app/webportal/services/customer-term.service';


@Component({
  selector: 'app-acceptterms',
  templateUrl: './acceptterms.component.html',
  styleUrls: ['./acceptterms.component.scss']
})
export class AccepttermsComponent implements OnInit {
  
  termstatus = 0;
  customer: Observable<Customer>;
  //termstatus: any;


  constructor(
    private customerAuthService: CustomerAuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

 reloadData(){
  this.customerAuthService.getCustomerStatus().subscribe(
    (data) =>{
      this.termstatus = data;
      if(data.length > 0){
      console.log('test' + this.termstatus)

      }
      else {

      }
    },
    (error) => {
      console.log(Error);
    }
  );
}

}
