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

  updateCustomerFeedback(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getCustomerFeedback(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
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

  getCountNewFeedback(): Observable<any> {
    let url = `http://localhost:8080/customerFeedback/status`;
    return this.http.get(url)
  }

  // getCountNewFeedback(): Observable<any> {
  //   let url = `http://localhost:8080/customerFeedback/status`;
  //   return this.http.get(url)
  // }

  getPublishedFeedback(): Observable<any> {
    let url = `http://localhost:8080/customerFeedback/status/published`;
    return this.http.get(url)
  }


  

}
