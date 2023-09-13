import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarPageComponent } from './pages/add-car-page/add-car-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AuthGuard } from './guard/auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OffertsPageComponent } from './pages/offerts-page/offerts-page/offerts-page.component';
import { CarSpecPageComponent } from './pages/car-spec-page/car-spec-page/car-spec-page.component';
import { ManageUsersComponent } from './pages/manage-users-page/manage-users/manage-users.component';
import { ManageCarsComponent } from './pages/manage-cars-page/manage-cars/manage-cars.component';
import { ReserveCarComponent } from './components/reserve-car/reserve-car.component';
import { ReservationConfirmationComponent } from './pages/reservation-confirmation/reservation-confirmation/reservation-confirmation.component';
import { ManageReservationsComponent } from './pages/manage-reservations/manage-reservations/manage-reservations.component';
import { ContactPageComponent } from './pages/contact-page/contact-page/contact-page.component';
import { ManageAllReservationsComponent } from './pages/manage-all-reservations/manage-all-reservations/manage-all-reservations.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent},
  { path: 'add-car', component: AddCarPageComponent, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'forgot-password/:token', component: ForgotPasswordComponent},
  { path: 'oferta', component: OffertsPageComponent},
  { path: 'car/:Id', component: CarSpecPageComponent},
  { path: 'manage-users', component: ManageUsersComponent},
  { path: 'manage-cars', component: ManageCarsComponent},
  { path: 'reserve', component: ReserveCarComponent},
  { path: 'confirmation', component: ReservationConfirmationComponent},
  { path: 'user-reservations', component:ManageReservationsComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'all-reservations', component: ManageAllReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }