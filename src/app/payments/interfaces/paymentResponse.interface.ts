export interface PaymentResponse {
  code: number;
  description: string;
  detail: Detail;
  status: string;
}

export interface Detail {
  id_transaccion: string;
  token: string;
  amount: number;
  cardType: string;
  cardIssuer: string;
  cardInfo: string;
  clientID: string;
  clientName: string;
  state: string;
  fecha: Date;
  acquirer: string;
  deferred: number;
  interests: string;
  interestValue: number;
  amountWoTaxes: string;
  amountWTaxes: string;
  taxesValue: string;
  amountAuthorized: number;
  discountRate: null;
  extras: null;
  description: string;
  mid: string;
  tid: string;
  tipoPago: string;
  email: string;
  fullname: string;
  phone: string;
  paymentType: string;
}
