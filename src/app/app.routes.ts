import { Routes } from '@angular/router';
import { PaymentPageComponent } from './payments/pages';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  { path: 'pagos', component: PaymentPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];
