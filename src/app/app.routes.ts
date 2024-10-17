import { Routes } from '@angular/router';
import { PaymentPageComponent } from './payments/pages';
import { LoginComponent } from './auth/components/login/login.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pagos', component: PaymentPageComponent, canActivate: [authGuard]},
  { path: '**', redirectTo: 'login' },
];
