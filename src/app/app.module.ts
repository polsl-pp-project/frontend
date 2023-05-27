import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core'
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AddCarPageComponent } from './pages/add-car-page/add-car-page.component';
import { RoleDirective } from './directives/role.directive';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CarCardComponent } from './components/car-card/car-card/car-card.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { OffertsPageComponent } from './pages/offerts-page/offerts-page/offerts-page.component';
import { CarOffertComponent } from './components/car-offert/car-offert/car-offert.component';
import { CarSpecPageComponent } from './pages/car-spec-page/car-spec-page/car-spec-page.component';
import { IsLoggedInDirective } from './directives/is-logged-in.directive';
import { ManageUsersComponent } from './pages/manage-users-page/manage-users/manage-users.component';
import { ManageCarsComponent } from './pages/manage-cars-page/manage-cars/manage-cars.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    SignupPageComponent,
    SearchBoxComponent,
    MainPageComponent,
    AddCarPageComponent,
    RoleDirective,
    ForgotPasswordComponent,
    CarCardComponent,
    OffertsPageComponent,
    CarOffertComponent,
    CarSpecPageComponent,
    IsLoggedInDirective,
    ManageUsersComponent,
    ManageCarsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
