import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {

  private readonly http = inject(HttpClient);
  private apiUrl = `http://localhost:3000/api/transactions`;

  getTransaction(transactionId: string): Observable<TransactionResponse> {
    return this.http.get<TransactionResponse>(
      `${this.apiUrl}/?id=${transactionId}`
    );
  }
}
