import { Component } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { Car } from 'src/app/models/car';
import { Reservation } from 'src/app/models/reservation';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  subscription!: Subscription;

  Cars: Car[] = [];

  constructor(private readonly carService: CarServiceService,
    private authService: AuthService) {
      this.authService.refresh()
      const source = interval(60000);
      this.subscription = source.subscribe(() => this.authService.refresh());
  }

  ngOnInit() {
    this.carService.getCars().subscribe((result) => {
      this.Cars = result;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}



