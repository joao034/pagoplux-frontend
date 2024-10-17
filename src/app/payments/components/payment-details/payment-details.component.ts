import { Component, Input } from '@angular/core';
import { TransactionResponse } from '../../interfaces';
import {  CommonModule } from '@angular/common';

@Component({
  selector: 'payments-payment-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
})
export class PaymentDetailsComponent {
  @Input() paymentDetails!: TransactionResponse;
}
