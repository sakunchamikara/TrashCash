import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term-details',
  templateUrl: './term-details.component.html',
  styleUrls: ['./term-details.component.scss']
})
export class TermDetailsComponent implements OnInit {

  terms: Observable<Terms[]>;
  successMsg: any;
  errorMsg: any;

  constructor(private newtermService:NewtermsService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.terms = this.newtermService.getNewtermList();
  }

}
