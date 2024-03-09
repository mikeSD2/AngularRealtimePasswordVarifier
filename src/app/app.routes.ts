import { Routes } from '@angular/router';
import { PasswordValidationComponent } from './password-validation/password-validation.component';

export const routes: Routes = [
  { path: 'passwordcheck', component: PasswordValidationComponent },
  { path: '', redirectTo: '/passwordcheck', pathMatch: 'full' },
  { path: '**', redirectTo: '/passwordcheck', pathMatch: 'full' },
];
