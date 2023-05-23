import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarPageComponent } from './pages/add-car-page/add-car-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent},
  { path: 'add-car', component: AddCarPageComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }