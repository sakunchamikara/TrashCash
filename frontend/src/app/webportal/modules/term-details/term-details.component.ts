import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-term-details',
  templateUrl: './term-details.component.html',
  styleUrls: ['./term-details.component.scss']
})
export class TermDetailsComponent implements OnInit {

  //terms: Observable<Terms[]>;
  successMsg: any;
  errorMsg: any;

  //termEmptyListFlag = false;
  //termList: Array<Terms>;
  termId: number;

  terms = new Terms;
  //randomTerms: Array<Terms>;

  constructor(private newtermService:NewtermsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
   // this.reloadData();
   this.termId = this.route.snapshot.params['id'];
   console.log("testing"+this.termId);
  this.getTermById(this.termId);
  // this.getRandomTerms();
  }



  getTermById(termId) {
    this.newtermService.getTerm(termId).subscribe(
      (data) => {
        this.terms = data;
       // this.productImage = 'data:image/jpeg;base64,' + data.image1;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.terms);
  
  }



}
