import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Terms } from 'src/app/pojo/terms';

@Component({
  selector: 'app-update-terms',
  templateUrl: './update-terms.component.html',
  styleUrls: ['./update-terms.component.scss'],
})
export class UpdateTermsComponent implements OnInit {
  id: number;
  terms: Terms;
  //newtermsService: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newtermsService: NewtermsService
  ) {}

  ngOnInit() {
    this.terms = new Terms();

    this.id = this.route.snapshot.params['id'];

    this.newtermsService.getTerms(this.id).subscribe(
      (data) => {
        console.log(data);

        this.terms = data;
      },
      (error) => console.log(error)
    );
  }
  updateTerms() {
    this.newtermsService.updateTerm(this.id, this.terms).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.terms = new Terms();
    this.gotoList();
  }

  onSubmit() {
    this.updateTerms();
  }
  gotoList() {
    this.router.navigate(['system/viewterms']);
  }
}
