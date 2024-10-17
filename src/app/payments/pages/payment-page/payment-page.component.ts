import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { PaymentButtonComponent } from "../../components/payment-button/payment-button.component";
import { PaymentDetailsComponent } from "../../components/payment-details/payment-details.component";
import { PaymentService } from '../../services/payment.service';
import { Observable } from 'rxjs';
import { PaymentResponse, TransactionResponse } from '../../interfaces';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'payments-payment-page',
  standalone: true,
  imports: [PaymentButtonComponent, PaymentDetailsComponent, AsyncPipe, CommonModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css',
})
export class PaymentPageComponent {
  private readonly paymentService = inject(PaymentService);
  private readonly cdr = inject( ChangeDetectorRef );

  public paymentDetails$! :Observable<TransactionResponse>;
  public paymentDetails! : TransactionResponse;

  onPaymentCompleted( transactionId: string ){
    console.log('Event received: ', transactionId )
    this.paymentDetails$ = this.paymentService.getTransaction( transactionId );

    this.paymentDetails$.subscribe( ( data ) => {
      this.paymentDetails = data;
      console.log( 'Transaction details from backend: ', data );
      this.cdr.detectChanges();
    })
  }


}
