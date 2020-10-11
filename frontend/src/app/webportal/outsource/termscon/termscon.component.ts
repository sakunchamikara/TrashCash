import { Component, OnInit } from '@angular/core';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-termscon',
  templateUrl: './termscon.component.html',
  styleUrls: ['./termscon.component.scss']
})
export class TermsconComponent implements OnInit {

  successMsg: any;
  errorMsg: any;
  termslist: Array<Terms>;
  termEmptyListFlag = false;
  activateFlag = '';

  constructor(private newtermService: NewtermsService) {}

  ngOnInit() {
    this.reloadData();
    // this.getTerms();
  }
  reloadData() {
    this.newtermService.getNewtermList().subscribe(
      (data) => {
        this.termslist = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
