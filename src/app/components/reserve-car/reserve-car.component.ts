import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Reservation } from 'src/app/models/reservation';
import { CarServiceService } from 'src/app/services/car-service/car-service.service';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-reserve-car',
  templateUrl: './reserve-car.component.html',
  styleUrls: ['./reserve-car.component.scss']
})
export class ReserveCarComponent {
  matchingcars: Car[] = [];
  startDate: Date | undefined; // Zmieniamy na Date | undefined
  endDate: Date | undefined;   // Zmieniamy na Date | undefined

  constructor(private readonly reservationService: ReservationService, private readonly CarService: CarServiceService, private router: Router) {}

  displayCars(startDate: Date, endDate: Date) {
    this.startDate = startDate; // Przypisujemy wartość
    this.endDate = endDate;     // Przypisujemy wartość

    this.CarService.getAvailableCars(startDate, endDate).subscribe((result) => {
      this.matchingcars = result;
      console.log(result);
      this.matchingcars.forEach((car) => {
        this.calculateRentalPrice(car, startDate, endDate);
      });
    });
  }

  calculateRentalPrice(car: Car, startDate: Date | any, endDate: Date | any) {
    const timeDifferenceInMilliseconds = endDate - startDate;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const timeDifferenceInDays = Math.ceil(timeDifferenceInMilliseconds / millisecondsPerDay);
    car.rentalprice = timeDifferenceInDays * car.price;
  }

  reserve(car: Car) {
    const queryParams = {
      startDate: this.startDate ? this.startDate.toISOString() : '', // Poprawiamy warunek
      endDate: this.endDate ? this.endDate.toISOString() : '',         // Poprawiamy warunek
      rentalPrice: car.rentalprice,
      carId: car.number,
      
    };
    
  
    console.log('queryParams:', queryParams); // Dodaj to przed nawigacją
    this.router.navigate(['/confirmation'], { queryParams });
  }
}
