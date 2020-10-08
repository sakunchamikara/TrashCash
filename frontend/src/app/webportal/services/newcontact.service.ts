import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from 'src/app/modules/confirmation-dialog/confirmation-dialog.component';
import {Contactus} from 'src/app/webportal/pojo/contactus';

@Injectable({
  providedIn: 'root'
})
export class NewcontactService {

  private baseUrl = 'http://localhost:8080/contactus';

  constructor(private http:HttpClient,private modalService: NgbModal) { }

  getRandomContactus(): Observable<any>{
    const url = 'httpp://localhost:8080/getRandomContactus';
    return this.http.get(url);
  }

  createNewcontact(contactus: Contactus): Observable<Contactus> {
    return this.http.post<any>(`${this.baseUrl}`, contactus);
  }

  getNewcontactList(): Observable<Contactus[]> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  deleteContactus(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm' | 'lg' = 'sm'
  ): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, {
      size: dialogSize,
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  } 
}
