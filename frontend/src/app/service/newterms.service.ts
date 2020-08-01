import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../modules/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: "root",
})
export class NewtermsService {
  private baseUrl = "http://localhost:8080/terms";
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  createNewterm(terms: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}`, terms);
  }
  getNewtermList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteTerm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getTerms(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateTerm(id: number, value: any): Observable<Object> {
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
}
