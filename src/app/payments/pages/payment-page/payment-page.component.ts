import { Component, inject } from '@angular/core';
import { PaymentButtonComponent } from "../../components/payment-button/payment-button.component";
import { PaymentDetailsComponent } from "../../components/payment-details/payment-details.component";
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'payments-payment-page',
  standalone: true,
  imports: [PaymentButtonComponent, PaymentDetailsComponent],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css',
})
export class PaymentPageComponent {

  private readonly paymentService = inject(PaymentService);

  paymentData: any;

  ngOnInit(): void {
    //Suscribe to changes
    this.paymentService.transactionData$.subscribe((data : PaymentResponse ) => {
      this.paymentData = data;
      console.log('Payment data', this.paymentData);
    });
  }
}
