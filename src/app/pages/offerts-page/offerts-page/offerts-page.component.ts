import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Car } from 'src/app/models/car';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';

@Component({
  selector: 'app-offerts-page',
  templateUrl: './offerts-page.component.html',
  styleUrls: ['./offerts-page.component.scss']
})
export class OffertsPageComponent {

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
      console.log(result);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

