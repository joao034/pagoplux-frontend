import { Component, inject, Input, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'payments-payment-details',
  standalone: true,
  imports: [],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent {

  @Input()
  paymentData: any;

  /* private readonly paymentService = inject( PaymentService );

  paymentData: any;

  ngOnInit(): void {
    //Suscribe to changes
    this.paymentService.transactionData$.subscribe( ( data ) => {
      this.paymentData = data;
      console.log('Payment data', this.paymentData)
    })
  } */

}
