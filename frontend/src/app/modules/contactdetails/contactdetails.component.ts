import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus} from 'src/app/webportal/pojo/contactus';
import { NewcontactService } from 'src/app/webportal/services/newcontact.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.scss']
})
export class ContactdetailsComponent implements OnInit {

  contactus: Observable<Contactus[]>;
  succesMsg: any;
  errorMsg: any;

  constructor(private newcontactusService: NewcontactService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.contactus = this.newcontactusService.getNewcontactList();
  }

  deleteContact(id: number){
    this.newcontactusService.deleteContactus(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  public openConfirmationDialog(id: number) {
    this.newcontactusService
      .confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => {
        // console.log('User confirmed:', confirmed);
        if (confirmed == true) {
          this.deleteContact(id);
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
        )
      );
  }
  

  

}
