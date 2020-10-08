import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogComponent } from '../modules/confirmation-dialog/confirmation-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertDialogComponent } from '../modules/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080/events';


  constructor(private http: HttpClient,private modalService: NgbModal) { }

  createEvent(event: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}`, event);

  }
  getEventList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEvent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateEvent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
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

getRandomEvents(): Observable<any> {
  const url = 'http://localhost:8080/getRandomEvent';
  return this.http.get(url);
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

