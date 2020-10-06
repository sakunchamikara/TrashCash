import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from 'src/app/modules/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerWasteRequestService {

  private baseUrl = 'http://localhost:8080/customerWasteRequest';
  
  constructor(private http:HttpClient,private modalService: NgbModal) { }

  createCustomerWasteRequest(wasteRequest:Object):Observable<Object>{

    console.log(wasteRequest);
      return this.http.post<any>(`${this.baseUrl}`,wasteRequest);

  }
  getCustomerWasteRequestList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getConfirmedWasteRequestList():Observable<any>{
    const uri = `http://localhost:8080/confirmedWasterequest`;
    return this.http.get(uri);
  }

  deleteCustomerWasteRequest(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCustomerWasteRequest(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  updateCustomerWasteRequest(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  
  getWasteListByEmail(email: String): Observable<any> {
    // return this.http.get(`${this.baseUrl}/${email}`);
    const uri = `http://localhost:8080/getRequestedWaste/${email}`;
    return this.http.get(uri);
  }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;

}
}



