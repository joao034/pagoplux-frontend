import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly http = inject(HttpClient);
  private apiUrl = `http://localhost:3000/api/transactions`;

  private transactionDataSource = new BehaviorSubject<any>(null) //Save the transaction
  transactionData$ = this.transactionDataSource.asObservable(); //Observable for other componets

  setTransactionData( data: any ){
    this.transactionDataSource.next( data ); //Emit the new data
  }

  getTransaction( transactionId: string ): Observable<any> {
    return this.http.get(`${ this.apiUrl }/?id=${ transactionId }`);
  }
}
