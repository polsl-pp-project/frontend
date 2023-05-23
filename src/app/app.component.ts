import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './services/auth-service/car-service/car-service.service';
import { AuthService } from './services/auth-service/auth.service';
import { Subscription, interval } from 'rxjs';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  subscription!: Subscription;

  cars: Car[] = [];

  constructor(private readonly carService: CarServiceService,
    private authService: AuthService) {
      this.authService.refresh()
      const source = interval(60000);
      this.subscription = source.subscribe(() => this.authService.refresh());
  }

  ngOnInit() {
    this.carService.getCars().subscribe((result) => {
      this.cars = result;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
