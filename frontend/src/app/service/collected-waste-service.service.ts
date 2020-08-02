import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CollectedWaste } from '../pojo/collectedWaste';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../modules/confirmation-dialog/confirmation-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class CollectedWasteServiceService {

  private baseUrl = 'http://localhost:8080/collectedWaste';

  constructor(private http: HttpClient,private modalService: NgbModal) { }

  createCollectedWaste(collectedWaste: Object) : Observable <Object>{
    return this.http.post<any>(`${this.baseUrl}`,collectedWaste);
  }

  getCollectedWasteList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteCollectedWaste(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCollectedWaste(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCollectedWaste(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value)
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
 getWasteCatDropdownValues(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
}
}

