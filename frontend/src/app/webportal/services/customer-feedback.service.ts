import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertDialogComponent } from 'src/app/modules/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerFeedbackService {

  private baseUrl = 'http://localhost:8080/customerFeedback';

  constructor(private http:HttpClient,private modalService: NgbModal) { }

  createCustomerFeedback(customerFeedback:Object):Observable<Object>{

    console.log(customerFeedback);
    return this.http.post<any>(`${this.baseUrl}`,customerFeedback);
   // return this.http.post<any>("http://localhost:8080/customerFeedback", customerFeedback);

  }

  getCustomerFeedbackList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  public alert(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(AlertDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
  
    return modalRef.result;
  
  }

}
