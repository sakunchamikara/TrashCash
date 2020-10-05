import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wpterms',
  templateUrl: './wpterms.component.html',
  styleUrls: ['./wpterms.component.scss']
})
export class WptermsComponent implements OnInit {

  terms :Observable<Terms[]>;
  successMsg: any;
  errorMsg: any;
  //termList: Array<Terms>;
  //terms: Terms;
  //termEmptyListFlag = false;
  //activateFlag = '';

  constructor(private newtermService:NewtermsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
   // this.getTerms();
  
  }
  reloadData(){
    this.terms = this.newtermService.getNewtermList();
  }

 

}
