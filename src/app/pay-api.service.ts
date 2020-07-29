import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Transaction} from './pay-api-templates'

@Injectable({
  providedIn: 'root'
})
export class PayApiService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getUrlFromId(payment_id) {
    return `http://localhost:8080/${payment_id}_payment`
  }

  addTransaction (paymentId, transcation: Transaction): Observable<any> {
    return this.http.post<Transaction>(
      this.getUrlFromId(paymentId), 
      transcation, this.httpOptions
    )
  }
}
